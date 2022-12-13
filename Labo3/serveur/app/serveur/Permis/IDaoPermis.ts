export interface IDaoPermis {
  MdlP_GetAll(): any;
  MdlP_GetByNumber(number: string): any;
  MdlP_Create(body: object): any;
  MdlP_Delete(number: string): any;
}
