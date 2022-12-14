import { Request } from "express";
import { Film } from "./Film";

export interface IDaoFilm {
  // Pour le CRUD - Create Read Update Delete

  // Create
  MdlF_Enregistrer(req: Request, film: Film): Promise<object>;

  // // Read
  // public List<Film> MdlF_GetAll();

  // public Film MdlF_GetById(int idf);

  // public Film MdlF_GetByTitre(String titre);

  // // Update
  // public int MdlF_Modifier(Film user);

  // // Delete
  // public int MdlF_Supprimer(int idf);
}
