import { Request } from "express";
import { Permis } from "./Permis";

export interface IControleurPermis {

    CtrP_GetAll(): any;
    CtrP_GetByNumber(number: string): any;
    CtrP_Create(body: object): any;
    CtrP_Delete(number: string): any;
    determinerAction(req: Request): any;

}
