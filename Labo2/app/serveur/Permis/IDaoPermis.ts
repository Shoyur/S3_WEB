import { Request } from "express";
import { Permis } from "./Permis";

export interface IDaoPermis {
  MdlP_GetAll(): any;
  MdlP_GetByAnimal(animal: string): any;
  MdlP_GetByVille(ville: string): any;
  MdlP_GetByDate(date: Date): any;
  MdlP_GetAllTriees(): any;
}
