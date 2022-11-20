import * as fs from "fs-extra";
import sha1 = require("sha1");

import { Film } from "./Film";
import { IDaoFilm } from "./IDaoFilm";
import { Connexion } from "./../bd/Connexion";
import { Env } from "../bd/env";

export class DaoFilm implements IDaoFilm {
  private static instanceDao: DaoFilm;

  private message = { msg: "" };
  private reponse:any;

  private dossier = Env.DOSSIER_POCHETTES;

  // Singleton de connexion à la BD
  // getConnexion() est devenu une zonne critique.
  // Pour ne pas avoir deux processus légers (threads) qui
  // appellent au même temps getConnexion
  private DaoFilm() {}

  public static getFilmDao(): DaoFilm | null {
    try {
      if (DaoFilm.instanceDao == null) {
        DaoFilm.instanceDao = new DaoFilm();
      }
      return DaoFilm.instanceDao;
    } catch (e) {
      return null;
    }
  }

  // Create
  async MdlF_Enregistrer(req: any, film: Film): Promise<object> {
    let pochette = "avatar.jpg";
    let maConnexion;
    let donnees = [film.getTitre(), film.getDuree(), film.getRealisateur()];

    try {
      let requette = "INSERT INTO films VALUES(0,?,?,?,?)";
      if (req.files.length > 0) {
        let extension = req.files[0].originalname.split(".").pop();
        pochette = sha1(film.getTitre() + process.hrtime()) + "." + extension;
        await fs.rename(req.files[0].path, this.dossier + pochette);
      }
      donnees.push(pochette);
      maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      await maConnexion.execute(requette, donnees);
      this.message.msg = "Film bien enregistré";
    } catch (e) {
      this.message.msg = "Problème pour enregistrer";
    } finally {
      return this.message;
    }
  }

  // Read
  async MdlF_GetAll(): Promise<object> {
    const requette = "SELECT * FROM films";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette);
      return reponse[0]; // Formet de reponse [[les films], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }
  }

  // Update
  async MdlF_Modifier(req: any, film:Film): Promise<object> {
    let maConnexion, source, anciennePochette, pochette, reponse:any;
    try {
      reponse = await this.MdlF_GetFilm(film.getIdf()); // Obtenir la pochette du film à modifier
      pochette = reponse[0].pochette; // Pochette actuelle du film à modifier
      if (req.files.length > 0) { // Un fichier a été uploadé ?
        if (pochette !== "avatar.jpg"){ // Ne pas enlever si ancienne pochette est avatar.jpg
            source = this.dossier + pochette; // Ancienne pochette
            await fs.remove(source);
        } 
        let fichTmp = "./" + req.files[0].path;
        let extension = req.files[0].originalname.split(".").pop();
        pochette = sha1(film.getTitre() + process.hrtime()) + "." + extension; // Nouvelle pochette
        await fs.rename(fichTmp, this.dossier + pochette);
        await fs.remove(fichTmp);
      }
      
      let donnees = [
        film.getTitre(),
        film.getDuree(),
        film.getRealisateur(),
        pochette,
        film.getIdf()
      ];
      let requette ="UPDATE films set titre=?,duree=?, realisateur=?, pochette=? WHERE idf=?";
      maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      await maConnexion.execute(requette, donnees);
      this.message.msg = "Film modifié";
    } catch (e) {
      this.message.msg = "Problème pour modifier!";
    } finally {
      return this.message;
    }
  }

  // Delete
  async MdlF_Supprimer(req: Request, idf: number): Promise<object> {
    const requetteSup = "DELETE FROM films WHERE idf=?";
    const requetteTrouve = "SELECT * FROM films WHERE idf=?";
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      let reponse = await maConnexion.execute(requetteTrouve, [idf]);
      reponse = reponse[0]; // reponse[0] contient le tableau des films
      if (reponse.length > 0) {
        await maConnexion.execute(requetteSup, [idf]);
        if (reponse[0].pochette != "avatar.jpg") {
          await fs.remove(this.dossier + reponse[0].pochette);
        }
        this.message.msg = `Film ${idf} supprimé`;
      } else {
        this.message.msg = "Film introuvable";
      }
    } catch (e) {
      this.message.msg = "Problème pour supprimer!" + e;
    } finally {
      return this.message;
    }
  }

  // Read
  async MdlF_GetFilm(idf: number): Promise<object> {
    try {
      let requette = "SELECT * FROM films WHERE idf=?";
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      this.reponse = await maConnexion.execute(requette, [idf]);
      return this.reponse[0]; // Formet de reponse [[les films], autres informations retournées]
    } catch (err) {
      this.message.msg = "Problème pour obtenir le film!";
      return this.message;
    }
  }

  
}
