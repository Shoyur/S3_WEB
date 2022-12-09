import { Request } from "express";

export interface IControleurPermis {

    CtrP_GetAll(): any;
    CtrP_GetByAnimal(animal: string): any;
    CtrP_GetByVille(ville: string): any;
    CtrP_GetByDate(an: number, mois: number): any;
    CtrP_GetAllTriees(): any;
    determinerAction(req: Request): any;

}
