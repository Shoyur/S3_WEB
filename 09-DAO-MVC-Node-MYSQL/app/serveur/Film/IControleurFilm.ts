
import { Film } from './Film';
import { Request } from "express";

export interface IControleurFilm {
    // Pour le CRUD - Create Read Update Delete

    // Create
   CtrF_Enregistrer(req:Request):Promise<object>; 
    
    // // Read
    // public List<Film> CtrF_GetAllFilms();

    // public Film CtrF_GetFilmById(int idf);

    // public Film CtrF_GetFilmByTitre(String titre);

    // // Update
    // public int CtrF_Modifier(Film user);

    // // Delete
    // public int CtrF_Enlever(int idf); 
}
