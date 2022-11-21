import { IControleurPermis } from "./IControleurPermis";
import { DaoPermis } from "./DaoPermis";
import { Request } from "express";

export class ControleurPermis implements IControleurPermis {
  private static CtrP_Instance: any;
  private static Dao_Instance: any;
  private reponse: any;
  // Singleton du contrôleur
  // getControleurPermis() est devenu une zonne critique.
  // Pour ne pas avoir deux processus légers (threads) qui
  // appellent au même temps getConnexion
  private ControleurPermis() {}

  public static getControleurPermis(): ControleurPermis | any {
    try {
      if (this.CtrP_Instance == null) {
        this.CtrP_Instance = new ControleurPermis();
        this.Dao_Instance = DaoPermis.getPermisDao();
      }
      return this.CtrP_Instance;
    } 
    catch (e) { return { msg: "Oups!" }; }
  }

  public async CtrP_GetAllPermis(): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetAll();
  }

  public async determinerAction(req: Request): Promise<object> {
    let action = req.body.action;
    switch (action) {
      case "tous":
        return await this.CtrP_GetAllPermis();
      default:
        return { msg: "Action invalide!" };
    }
  }
}
