import { IDaoPermis } from "./IDaoPermis";
import { default as axios } from 'axios';

export class DaoPermis implements IDaoPermis {

  private static instanceDao: DaoPermis;

  private DaoPermis() {}

  public static getPermisDao(): DaoPermis | null {
    try {
      if (DaoPermis.instanceDao == null) {
        DaoPermis.instanceDao = new DaoPermis();
      }
      return DaoPermis.instanceDao;
    } 
    catch (e) { return null; }
  }

  // CREATE
  public async MdlP_Create(req: any): Promise<any> {
    const url = 'http://localhost:4000/v1/permis/?apikey=' + req.query.apikey;
    try { return (await axios.put(url, req.body)).data; }
    catch(e) { return []; }
  } 

  public async MdlU_Create(req: any): Promise<any> {    
    const url = 'http://localhost:4000/v1/usager/';
    try { return (await axios.put(url, req.body)).data; }
    catch(e) { return []; }
  } 

  // READ
  public async MdlP_GetAll(req: any): Promise<any> {
    const url = 'http://localhost:4000/v1/permis/?apikey=' + req.query.apikey;
    try { return (await axios.get(url)).data; }
    catch(e) { return []; }
  }

  public async MdlP_GetByNumber(req: any): Promise<any> {
    const url = 'http://localhost:4000/v1/permis/' + req.params.id + '?apikey=' + req.query.apikey;
    try { return (await axios.get(url)).data; } 
    catch(e) { return []; }
  }
  
  // UPDATE

  // DELETE
  public async MdlP_Delete(req: any): Promise<any> {
    const url = 'http://localhost:4000/v1/permis/' + req.params.id + '?apikey=' + req.query.apikey;
    try { return (await axios.delete(url)).data; } 
    catch(e) { return []; }
  }  
  
}
