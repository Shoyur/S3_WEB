import { IControleurPatient } from "./IControleurPatient";
import { Patient } from "./Patient";
import { DaoPatient } from "./DaoPatient";
import { Request } from "express";

export class ControleurPatient implements IControleurPatient {
  private static CtrP_Instance: any;
  private static Dao_Instance: any;
  private reponse: any;
  // Singleton du contrôleur
  // getControleurPatient() est devenu une zonne critique.
  // Pour ne pas avoir deux processus légers (threads) qui
  // appellent au même temps getConnexion
  private ControleurPatient() {}

  public static getControleurPatient(): ControleurPatient | any {
    try {
      if (this.CtrP_Instance == null) {
        this.CtrP_Instance = new ControleurPatient();
        this.Dao_Instance = DaoPatient.getPatientDao();
      }
      return this.CtrP_Instance;
    } catch (e) {
      return { msg: "Oups!" };
    }
  }

  public async CtrP_Enregistrer(req: Request): Promise<object> {
    let patient: Patient = new Patient(
      0,
      req.body.nom,
      req.body.prenom,
      req.body.daten,
      req.body.sexe,
      req.body.adresse,
      req.body.cp,
      req.body.fumeur
    );
    return await ControleurPatient.Dao_Instance.MdlP_Enregistrer(req, patient);
  }

  public async CtrP_GetAll(): Promise<object> {    
    return await ControleurPatient.Dao_Instance.MdlP_GetAll();
  }

  public async CtrP_GetByNonFumeurs(): Promise<object> {
    return await ControleurPatient.Dao_Instance.MdlP_GetByNonFumeurs();
  }

  public async CtrP_GetByVille(ville: string): Promise<object> {
    return await ControleurPatient.Dao_Instance.MdlP_GetByNonFumeurs();
  }

  public async CtrP_Supprimer(req: Request): Promise<object> {
    return await ControleurPatient.Dao_Instance.MdlP_Supprimer(req, req.body.idp);
  }

  public async determinerAction(req: Request): Promise<object> {
    let action = req.body.action;
    console.log("juste avant action = " + action);
    switch (action) {

      case "enregistrer":
        console.log("recu ici !!!!!!!!!!!!!!");
        
        return await this.CtrP_Enregistrer(req);

      case "listerTous":
        return await this.CtrP_GetAll();

      case "listerNonFumeurs":
        return await this.CtrP_GetByNonFumeurs();
        
      case "listerSelonVille":
        return await this.CtrP_GetByNonFumeurs();

      case "enlever":
        return await this.CtrP_Supprimer(req);

      default:
        return { msg: "Action invalide!" };
    }
  }
}
