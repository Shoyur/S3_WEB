// import * as fs from "fs-extra";
import sha1 = require("sha1");

// import { Permis } from "./Permis";
import { IDaoPermis } from "./IDaoPermis";
import { Connexion } from "./../bd/Connexion";

export class DaoPermis implements IDaoPermis {

  private static instanceDao: DaoPermis;

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
    } 
    catch (e) { 
      console.log("Erreur: ", e);
      return [];
    }
  }

  public async MdlP_GetByAnimal(animal: string): Promise<object> {
    const requette = "SELECT * FROM Permis WHERE Animal_Type_de_permis = ?";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [animal]);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    } 
    catch (e) { 
      console.log("Erreur: ", e);
      return [];
    } 
  } 
  
  public async MdlP_GetByVille(ville: string): Promise<object> {
    const requette = "SELECT * FROM Permis WHERE Gardien_Territoire_ex_villes = ?";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [ville]);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    }  
    catch (e) { 
      console.log("Erreur: ", e);
      return [];
    }  
  } 
  
  public async MdlP_GetByDate(an: number, mois: number): Promise<object> {
    const requette = "SELECT * FROM `permis` WHERE YEAR(Permis_Date_de_fin)=? AND MONTH(Permis_Date_de_fin)=?";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette, [an, mois]);
      
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    }  
    catch (e) { 
      console.log("Erreur: ", e);
      return [];
    }  
  } 
  
  public async MdlP_GetAllTriees(): Promise<object> {
    const requette = "SELECT * FROM Permis ORDER BY Animal_Type_de_permis";
    let reponse;
    try {
      let maConnexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await maConnexion.execute(requette);
      return reponse[0]; // Formet de reponse [[les Permis], autres informations retournées]
    }  
    catch (e) { 
      console.log("Erreur: ", e);
      return [];
    }   
  }  
  
}
