import { Usager } from "../models/Usager";
import { UsagerDao } from "../models/UsagerDao";

export class UsagerControleur {

    public static async CtrU_CreateUsager(req: any, res: any) {
        const apikey = [...Array(4)].map((e) => ((Math.random() * 36) | 0).toString(36)).join('');
        const usager: Usager = new Usager(
            apikey,
            req.body.nom,
            req.body.prenom,
            req.body.courriel,
            req.body.motdepasse);
        await UsagerDao.MdlU_CreateUsager(usager);
        res.send({"status": "OK", "donnees": "L'usager a été créé avec la clé API " + apikey + "", "apikey": apikey});
    }

    public static async CtrU_GetUsager(req: any) {             
        return await UsagerDao.MdlU_GetUsager(req.query.apikey);
    }

}