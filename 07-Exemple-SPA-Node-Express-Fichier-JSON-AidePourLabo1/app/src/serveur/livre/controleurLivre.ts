import { Request, Response } from "express";
import path from "path";
import { open } from "node:fs/promises";
import { Livre } from "./livre";

const chargerFichierJsonEnObjetJson = async (): Promise<Array<Livre>> => {
  //let auteur = req.body.auteur;
  let cheminFichier = path.join(__dirname, "../donnees/livres.json");
  let listeLivres: Array<Livre> = [];
  try {
    let fichier = await open(cheminFichier);
    const contenu = await fichier.readFile("utf-8");
    fichier.close();
    listeLivres = JSON.parse(contenu);
  } catch (e: any) {
  } finally {
    return listeLivres;
  }
};

export const listeLivresDeAuteur = async (req: Request): Promise<string> => {
  let listeLivres: Array<Livre> = await chargerFichierJsonEnObjetJson();
  let numAuteur = req.body.numAuteur;

  let listeLivresDeAuteur: Array<Livre> = [];

  for (let unLivre of listeLivres) {
    if (unLivre.IdAuteur == numAuteur) {
      listeLivresDeAuteur.push(unLivre);
    }
  }
  return JSON.stringify(listeLivresDeAuteur);
};
