//import * as express from "express"; même chose

import express = require('express');
import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";
import http = require('http');
import bodyParser = require('body-parser');
import path    = require("path");
import multer  = require('multer'); //mutipart/form-data
import { ControleurPatient } from './app/serveur/Patient/ControleurPatient';
let upload = multer({ dest: 'app/serveur/uploads' });

const app = express();
let port = 8282;
app.listen(port);
console.log(`Serveur démarré sur le port ${port}`);
app.enable('trust proxy');

app.use(express.static(__dirname + "/app"));//to get also css, js, images, ...
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.text()); // support text encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', async (req:Request, res:Response)=>{
	res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.all('/Patient', async (req: Request, res: Response, next: NextFunction) => {
	try {
		let reponse = await ControleurPatient.getControleurPatient().determinerAction(req);
		res.header('Content-type', 'application/json');
		res.header('Charset', 'utf8');
		res.send(reponse); 
	}
	catch(err) { next(err); }
});

app.use(( err: Error, req: Request, res: Response, next: NextFunction ) : void => {
	console.log(err);
});