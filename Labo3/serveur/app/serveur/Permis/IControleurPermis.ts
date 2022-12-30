import { Request } from "express";
import { Permis } from "./Permis";

export interface IControleurPermis {

    // CREATE
    CtrP_Create(req: any): any;
    CtrU_Create(req: any): any;

    // READ
    CtrP_GetAll(req: any): any;
    CtrP_GetByNumber(req: any): any;
    
    // UPDATE

    // DELETE
    CtrP_Delete(req: any): any;

}
