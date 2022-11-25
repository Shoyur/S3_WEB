import express = require('express');
import { Request, Response, NextFunction } from "express";
import bodyParser = require('body-parser');
import path = require("path");
import { ControleurPermis } from './app/serveur/Permis/ControleurPermis';

const app = express();
let port = 8282;
app.listen(port);
console.log(`Serveur démarré sur le port ${port}`);
app.enable('trust proxy');

app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async (req:Request, res:Response)=>{
	res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.all('/permis', async (req:Request, res:Response, next:NextFunction) => {
	try {
		let reponse = await ControleurPermis.getControleurPermis().determinerAction(req);
		res.header('Content-type','application/json');
		res.header('Charset','utf8');
		res.send(reponse); 
	}
	catch(err) { next(err); }
});

app.use(( err: Error, req: Request, res: Response, next: NextFunction ) : void => {
	console.log(err);
});