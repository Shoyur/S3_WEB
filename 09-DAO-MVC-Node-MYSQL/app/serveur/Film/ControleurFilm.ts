import { IControleurFilm } from "./IControleurFilm";
import { Film } from "./Film";
import { DaoFilm } from "./DaoFilm";
import { Request } from "express";

export class ControleurFilm implements IControleurFilm {
  private static CtrF_Instance: any;
  private static Dao_Instance: any;
  private reponse: any;
  // Singleton du contrôleur
  // getControleurFilm() est devenu une zonne critique.
  // Pour ne pas avoir deux processus légers (threads) qui
  // appellent au même temps getConnexion
  private ControleurFilm() {}

  public static getControleurFilm(): ControleurFilm | any {
    try {
      if (this.CtrF_Instance == null) {
        this.CtrF_Instance = new ControleurFilm();
        this.Dao_Instance = DaoFilm.getFilmDao();
      }
      return this.CtrF_Instance;
    } catch (e) {
      return { msg: "Oups!" };
    }
  }

  public async CtrF_Enregistrer(req: Request): Promise<object> {
    let film: Film = new Film(
      0,
      req.body.titre,
      parseInt(req.body.duree),
      req.body.realisateur,
      "Pochette"
    );
    return await ControleurFilm.Dao_Instance.MdlF_Enregistrer(req, film);
  }

  public async CtrF_GetAll(): Promise<object> {
    return await ControleurFilm.Dao_Instance.MdlF_GetAll();
  }

  public async CtrF_Supprimer(req: Request): Promise<object> {
    return await ControleurFilm.Dao_Instance.MdlF_Supprimer(req, req.body.idf);
  }

  public async CtrF_GetFilm(req: Request): Promise<object> {
    return await ControleurFilm.Dao_Instance.MdlF_GetFilm(req.body.idf);
  }

  public async CtrF_Modifier(req: Request): Promise<object> {
    let film: Film = new Film(
      req.body.idf,
      req.body.titre,
      parseInt(req.body.duree),
      req.body.realisateur,
      ""
    );
    return await ControleurFilm.Dao_Instance.MdlF_Modifier(req, film);
  }

  public async determinerAction(req: Request): Promise<object> {
    let action = req.body.action;
    switch (action) {
      case "enregistrer":
        return await this.CtrF_Enregistrer(req);
      case "lister":
        return await this.CtrF_GetAll();
      case "enlever":
        return await this.CtrF_Supprimer(req);
      case "fiche":
        return await this.CtrF_GetFilm(req);
      case "modifier":
        return await this.CtrF_Modifier(req);
      default:
        return { msg: "Action invalide!" };
    }
  }
}
