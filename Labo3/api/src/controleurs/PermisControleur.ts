import { Permis } from "../models/Permis";
import { DaoPermis }  from "../models/PermisDao";
import { MSG_GRAVE, MSG_API_NOK, MSG_API_LVL, MSG_INTROUVABLE } from "../utilitaires/env_vars";
import { UsagerControleur } from "./UsagerControleur";

export class PermisControleur {

  // CREATE
  public static async CtrP_Create(req: any, res: any) {
    try {
      if (await UsagerControleur.CtrU_GetUsager(req)) {

        const date = new Date();
        const permis: Permis = new Permis(
          0,
          date.toISOString().split('T')[0],
          (new Date(date.setFullYear(date.getFullYear() + 1))).toLocaleDateString(),
          req.body.ville,
          req.body.espece,
          req.body.nom);
        let reponse = await DaoPermis.MdlP_Create(permis);
        res.send(reponse);
      }
      else { res.send(MSG_API_NOK); }
    } catch(e) { res.send(MSG_GRAVE); }
  }

  // READ
  public static async CtrP_GetAllPermis(req: any, res: any) {
    try {
      if (await UsagerControleur.CtrU_GetUsager(req)) {
        const listePermis = await DaoPermis.MdlP_GetAllPermis();
        res.send({"status": "OK", "donnees": listePermis});
      } 
      else { res.send(MSG_API_NOK); }
    } 
    catch(e) { res.send(MSG_GRAVE); }
  }

  public static async CtrP_GetById(req: any, res: any) {
    try {
      if (await UsagerControleur.CtrU_GetUsager(req)) {
        const permis = await DaoPermis.MdlP_GetById(parseInt(req.params.id));
        res.send({"status": "OK", "donnees": permis});
      } 
      else { res.send(MSG_API_NOK); }
    } 
    catch(e) { res.send(MSG_GRAVE); }
  }

  // UPDATE

  // DELETE
  public static async CtrP_Delete(req: any, res: any) {
    try {
      if (await UsagerControleur.CtrU_GetUsager(req)) {
        await DaoPermis.MdlP_Delete(parseInt(req.params.id));
        res.send({"status": "OK", "donnees": "Votre demande d'effacer le permis # " + req.params.id + " a été exécuté!"});
      } 
      else { res.send(MSG_API_NOK); }
    } 
    catch(e) { res.send(MSG_GRAVE); } 
  }

}