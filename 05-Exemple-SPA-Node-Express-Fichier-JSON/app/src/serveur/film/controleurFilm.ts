import { Request, Response } from "express";
import { obtenirFichier } from "./modelFilms"

export const controleurFilms = async (req: Request): Promise<string> => {
  const action = req.body.action;
  switch (action) {
    case "fichier":
      const fichier = req.body.nom;
      return await obtenirFichier(fichier);
    default:
      return new Promise((resolve) => {
        resolve("");
      });
  }
}