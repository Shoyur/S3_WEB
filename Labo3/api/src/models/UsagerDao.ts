import { Connexion } from "../BD/connexion";
import { Usager } from "./Usager";

export class UsagerDao {

  // CRUD
  private static GET_USAGER = "SELECT * FROM usagers WHERE apikey = ?";
  private static CREATE_USAGER = "INSERT INTO usagers VALUES(?, ?, ?, ?, ?)";
  

  // CREATE
  public static async MdlU_CreateUsager(usager: Usager): Promise<object> {
    try {
      let connexion = await Connexion.getInstanceConnexion().getConnexionBD();
      await connexion.execute(this.CREATE_USAGER, [usager.apikey, usager.nom, usager.prenom, usager.courriel, usager.motdepasse]);
      return []; 
    } 
    catch (e) { return []; }
  }

  // READ
  public static async MdlU_GetUsager(apikey: string): Promise<any> {
    let reponse;
    try {
      let connexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await connexion.execute(this.GET_USAGER, [apikey]);
      return (reponse[0].length) ? true : false;
    } 
    catch (e) { return false; }
  }

  // UPDATE

  // DELETE

}