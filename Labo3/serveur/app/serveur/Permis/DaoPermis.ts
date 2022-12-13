// import * as fs from "fs-extra";
import sha1 = require("sha1");

// import { Permis } from "./Permis";
import { IDaoPermis } from "./IDaoPermis";
// import { Connexion } from "./../bd/Connexion";
import https = require("https");

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
  public async MdlP_GetAll(): Promise<any> {
    https.get('localhost:4000/api/v1/permis/ /apod?api_key=DEMO_KEY', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { return JSON.parse(data).explanation });
    }).on("error", (e) => { 
      console.log("Erreur: ", e);
      return []; 
    });
  }

  public async MdlP_GetByNumber(number: string): Promise<any> {
    https.get('localhost:4000/api/v1/permis/ /apod?api_key=DEMO_KEY', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { return JSON.parse(data).explanation });
    }).on("error", (e) => { 
      console.log("Erreur: ", e);
      return []; 
    });
  } 
  
  public async MdlP_Create(body: object): Promise<any> {
    https.get('localhost:4000/api/v1/permis/ /apod?api_key=DEMO_KEY', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { return JSON.parse(data).explanation });
    }).on("error", (e) => { 
      console.log("Erreur: ", e);
      return []; 
    });
  } 
  
  public async MdlP_Delete(number: string): Promise<any> {
    https.get('localhost:4000/api/v1/permis/ /apod?api_key=DEMO_KEY', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { return JSON.parse(data).explanation });
    }).on("error", (e) => { 
      console.log("Erreur: ", e);
      return []; 
    });
  }  
  
}
