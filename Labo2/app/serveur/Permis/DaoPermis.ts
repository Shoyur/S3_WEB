import * as fs from "fs-extra";
import sha1 = require("sha1");

import { Permis } from "./Permis";
import { IDaoPermis } from "./IDaoPermis";
import { Connexion } from "./../bd/Connexion";

export class DaoPermis implements IDaoPermis {
  private static instanceDao: DaoPermis;

  private message = { msg: "" };
  private reponse: any;

  // Singleton de connexion à la BD
  // getConnexion() est devenu une zone critique.
  // Pour ne pas avoir deux processus légers (threads) qui
  // appellent au même temps getConnexion
  private DaoPermis() {}

  public static getPermisDao(): DaoPermis | null {
    try {
      if (DaoPermis.instanceDao == null) {
        DaoPermis.instanceDao = new DaoPermis();
      }
      return DaoPermis.instanceDao;
    } 
    catch (e) { return null; }
  }

  // Read
  public async MdlP_GetAll(): Promise<object> {
    const requette = "SELECT * FROM Permis";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }
  }

  public async MdlP_GetByAnimal(animal: string): Promise<object> {
    const requette = "SELECT * FROM Permis WHERE espece = ?";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [animal]);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }    
  } 
  
  public async MdlP_GetByVille(ville: string): Promise<object> {
    const requette = "SELECT * FROM Permis WHERE ville = ?";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [ville]);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }    
  } 
  
  public async MdlP_GetByDate(date: Date): Promise<object> {
    const requette = "SELECT * FROM Permis WHERE date < ?";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [date]);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }    
  } 
  
  public async MdlP_GetAllTriees(): Promise<object> {
    const requette = "SELECT * FROM Permis ORDER BY espece";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }    
  }  
  
}
