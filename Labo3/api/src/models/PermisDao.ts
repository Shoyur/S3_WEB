import { Connexion } from "../BD/connexion";
import { Permis } from "./Permis";
import { MSG_GRAVE, MSG_API_NOK, MSG_API_LVL, MSG_INTROUVABLE, MSG_PERMIS_CREE } from "../utilitaires/env_vars";


export class DaoPermis {

  // CRUD
  private static CREATE = "INSERT INTO permis VALUES(?, ?, ?, ?, ?, ?)";
  private static GET_ALL = "SELECT * FROM permis";
  // private static GET_ALL = "SELECT * FROM permis";
  private static GET_BY_ID = "SELECT * FROM permis WHERE Permis_Numéro = ?";
  private static DELETE = "DELETE FROM permis WHERE Permis_Numéro = ?";

  private static message = { "msg": "" };

  // CREATE
  public static async MdlP_Create(permis: Permis): Promise<object> {
    try {
      let connexion = await Connexion.getInstanceConnexion().getConnexionBD();
      await connexion.execute(this.CREATE, [
        0, permis.Permis_Date_de_debut, permis.Permis_Date_de_fin,
        permis.Gardien_Territoire_ex_villes, permis.Animal_Type_de_permis, permis.Animal_Nom]);
      return MSG_PERMIS_CREE; 
    } catch (e) {
      this.message.msg = "Problème pour créer le permis!";
      return this.message;
    }
  }

  // READ
  public static async MdlP_GetAllPermis(): Promise<object> {
    let reponse;
    try {
      let connexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await connexion.execute(this.GET_ALL);
      return reponse[0];
    }
    catch (e) {
      this.message.msg = "Problème pour obtenir tous les permis!";
      return this.message;
    }
  }

  public static async MdlP_GetById(numero: number): Promise<object> {
    let reponse;
    try {
      let connexion = await Connexion.getInstanceConnexion().getConnexionBD();
      reponse = await connexion.execute(this.GET_BY_ID, [numero]);
      return reponse[0];
    } 
    catch (e) {
      this.message.msg = "Problème pour obtenir le permis!";
      return this.message;
    }
  }

  // UPDATE

  // DELETE
  public static async MdlP_Delete(numero: number): Promise<object> {
    try {
      let connexion = await Connexion.getInstanceConnexion().getConnexionBD();
      await connexion.execute(this.DELETE, [numero]);
      this.message.msg = "Permis supprimé"; /////////////////////////////////////////////////////////
      return this.message;
    } catch (e) {
      this.message.msg = "Problème pour supprimer le permis";
      return this.message;
    }
  }

}