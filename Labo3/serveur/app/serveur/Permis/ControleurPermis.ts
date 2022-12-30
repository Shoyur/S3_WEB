import { IControleurPermis } from "./IControleurPermis";
import { DaoPermis } from "./DaoPermis";

export class ControleurPermis implements IControleurPermis {

  private static CtrP_Instance: any;
  private static Dao_Instance: any;

  private ControleurPermis() {}

  public static getControleurPermis(): ControleurPermis | any {
    try {
      if (this.CtrP_Instance == null) {
        this.CtrP_Instance = new ControleurPermis();
        this.Dao_Instance = DaoPermis.getPermisDao();
      }
      return this.CtrP_Instance;
    } 
    catch (e) { return { msg: "Oups!" }; }
  }

  // CREATE
  public async CtrP_Create(req: any): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_Create(req);
  }

  public async CtrU_Create(req: any): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlU_Create(req);
  }

  // READ
  public async CtrP_GetAll(req: any): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetAll(req);
  }

  public async CtrP_GetByNumber(req: any): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_GetByNumber(req);
  }

  // UPDATE

  // DELETE
  public async CtrP_Delete(req: any): Promise<object> {
    return await ControleurPermis.Dao_Instance.MdlP_Delete(req);
  }

}
