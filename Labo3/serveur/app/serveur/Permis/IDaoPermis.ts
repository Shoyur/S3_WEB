export interface IDaoPermis {
  
  // CREATE
  MdlP_Create(body: object): any;
  MdlU_Create(body: object): any;

  // READ
  MdlP_GetAll(req: any): any;
  MdlP_GetByNumber(number: string): any;

  // UPDATE

  // DELETE
  MdlP_Delete(number: string): any;

}
