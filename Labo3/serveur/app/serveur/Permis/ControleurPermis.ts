import { IControleurPermis } from "./IControleurPermis";
import { DaoPermis } from "./DaoPermis";
import { Request } from "express";
import { Permis } from "./Permis";

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

  public async CtrP_GetAll(): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetAll();
  }

  public async CtrP_GetByNumber(number: string): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetBynumber(number);
  }

  public async CtrP_Create(body: object): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_Create(body);
  }

  public async CtrP_Delete(number: string): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_Delete(number);
  }


  public async determinerAction(req: Request): Promise<object> {
    let key = req.body.key;
    switch (key) {
      case "all":
        return await this.CtrP_GetAll();
      case "number":
        return await this.CtrP_GetByNumber(req.body.value);
      case "create":
        return await this.CtrP_Create(req.body);
      case "effacer":
        return await this.CtrP_Delete(req.body.value);
      default:
        return { msg: "Action invalide!" };
    }
  }
}
