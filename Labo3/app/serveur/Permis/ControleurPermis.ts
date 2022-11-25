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

  public async CtrP_GetAll(): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetAll();
  }

  public async CtrP_GetByAnimal(animal: string): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetByAnimal(animal);
  }

  public async CtrP_GetByVille(ville: string): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetByVille(ville);
  }

  public async CtrP_GetByDate(an: number, mois: number): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetByDate(an, mois);
  }

  public async CtrP_GetAllTriees(): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetAllTriees();
  }

  public async determinerAction(req: Request): Promise<object> {
    let key = req.body.key;
    switch (key) {
      case "tous":
        return await this.CtrP_GetAll();
      case "animal":
        return await this.CtrP_GetByAnimal(req.body.value);
      case "ville":
        return await this.CtrP_GetByVille(req.body.value);
      case "expire":
        return await this.CtrP_GetByDate(req.body.an, req.body.mois);
      case "tries":
        return await this.CtrP_GetAllTriees();
      default:
        return { msg: "Action invalide!" };
    }
  }
}
