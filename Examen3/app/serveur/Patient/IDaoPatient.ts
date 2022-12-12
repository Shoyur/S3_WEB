import { Request } from "express";
import { Patient } from "./Patient";

export interface IDaoPatient {
  // Pour le CRUD - Create Read Update Delete

  // CREATE
  MdlP_Enregistrer(req: Request, patient: Patient): Promise<object>;

  // READ
  MdlP_GetAll(): any;
  MdlP_GetByNonFumeurs(): any;
  MdlP_GetByVille(ville: string): any;

  // DELETE
  MdlP_Supprimer(idp: number): any;
}
