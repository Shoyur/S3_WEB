
import { Patient } from './Patient';
import { Request } from "express";

export interface IControleurPatient {
    // Pour le CRUD - Create Read Update Delete

    // CREATE
    CtrP_Enregistrer(req: Request, patient: Patient): Promise<object>;

    // READ
    CtrP_GetAll(): any;
    CtrP_GetByNonFumeurs(): any;
    CtrP_GetByVille(ville: string): any;

    // DELETE
    CtrP_Supprimer(req: Request): any;
}
