import * as fs from "fs-extra";
import sha1 = require("sha1");

import { Patient } from "./Patient";
import { IDaoPatient } from "./IDaoPatient";
import { Connexion } from "./../bd/Connexion";
import { Env } from "../bd/env";

export class DaoPatient implements IDaoPatient {
  private static instanceDao: DaoPatient;

  private message = { msg: "" };
  private reponse: any;

  // Singleton de connexion à la BD
  // getConnexion() est devenu une zonne critique.
  // Pour ne pas avoir deux processus légers (threads) qui
  // appellent au même temps getConnexion
  private DaoPatient() {}

  public static getPatientDao(): DaoPatient | null {
    try {
      if (DaoPatient.instanceDao == null) {
        DaoPatient.instanceDao = new DaoPatient();
      }
      return DaoPatient.instanceDao;
    } catch (e) {
      return null;
    }
  }

  // CREATE
  async MdlP_Enregistrer(req: any, Patient: Patient): Promise<object> {
    let maConnexion;
    let donnees = [
      Patient.getNom(), 
      Patient.getPrenom(), 
      Patient.getDaten(),
      Patient.getSexe(),
      Patient.getAdresse(),
      Patient.getCp(),
      Patient.getFumeur()
    ];

    try {
      let requette = "INSERT INTO patients VALUES(0,?,?,?,?)";
      maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      await maConnexion.execute(requette, donnees);
      this.message.msg = "Patient bien enregistré";
    } catch (e) {
      this.message.msg = "Problème pour enregistrer";
    } finally {
      return this.message;
    }
  }

  // READ
  async MdlP_GetAll(): Promise<object> {;
    const requette = "SELECT * FROM patients";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette);
      return reponse[0]; // Formet de reponse [[les Patients], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }
  }

  async MdlP_GetByNonFumeurs(): Promise<object> {
    const requette = "SELECT * FROM patients WHERE fumeur=false";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette);
      return reponse[0]; // Formet de reponse [[les Patients], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }
  }
  
  async MdlP_GetByVille(ville: string): Promise<object> {
    const requette = "SELECT * FROM patients WHERE adresse like '%?%'";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [ville]);
      return reponse[0]; // Formet de reponse [[les Patients], autres informations retournées]
    } catch (e) {
      this.message.msg = "Problème pour lister";
      return this.message;
    }
  }

  // DELETE
  async MdlP_Supprimer(idp: number): Promise<object> {
    const requetteSup = "DELETE FROM patients WHERE idp=?";
    const requetteTrouve = "SELECT * FROM patients WHERE idp=?";
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      let reponse = await maConnexion.execute(requetteTrouve, [idp]);
      reponse = reponse[0]; // reponse[0] contient le tableau des Patients
      if (reponse.length > 0) {
        await maConnexion.execute(requetteSup, [idp]);
        this.message.msg = `Patient ${idp} supprimé`;
      } else {
        this.message.msg = "Patient introuvable";
      }
    } catch (e) {
      this.message.msg = "Problème pour supprimer!" + e;
    } finally {
      return this.message;
    }
  }
  
}
