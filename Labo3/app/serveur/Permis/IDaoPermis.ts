export interface IDaoPermis {
  MdlP_GetAll(): any;
  MdlP_GetByAnimal(animal: string): any;
  MdlP_GetByVille(ville: string): any;
  MdlP_GetByDate(an: number, mois: number): any;
  MdlP_GetAllTriees(): any;
}
