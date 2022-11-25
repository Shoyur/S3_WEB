import mysql = require("mysql2/promise");
import { Env } from "../bd/env";

// Patron de conception Singleton
export class Connexion {
  private static instanceConnexion: Connexion;
  private static connexion: any;

  // Interdire de créer des objets Connexion par l'extérieur de la classe
  private construct() {}

  // Retourne le singleton de la connexion
  static getInstanceConnexion(): Connexion {
    if (Connexion.instanceConnexion == null) {
      Connexion.instanceConnexion = new Connexion();
    }
    return Connexion.instanceConnexion;
  }

  public async getConnexionBD(): Promise<any> {
    if (Connexion.connexion == null) {
      await Connexion.creerConnexion();
    }
    return Connexion.connexion;
  }
  // Créer la connexion
  private static async creerConnexion(): Promise<any> {
    try {
      Connexion.connexion = await mysql.createConnection({
        host: Env.SERVEUR,
        user: Env.USAGER,
        password: Env.PASS,
        database: Env.BD,
      });
    } catch (e) {}
  }
}
