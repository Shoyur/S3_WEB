import express = require("express");
import { Request, Response, NextFunction } from "express";
import bodyParser = require("body-parser");
import path = require("path");
import { ControleurPermis } from "./app/serveur/Permis/ControleurPermis";

const app = express();
let port = 8282;
app.listen(port);
console.log(`Serveur démarré sur le port ${port}`);
app.enable("trust proxy");

app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "/app/index.html"));
});

// app.get("/permis", ...
// app.post("/permis", ...
// app.put("/permis/:id", ...
// app.delete("/permis/:id", ..

app.all("/permis", async (req: Request, res: Response, next: NextFunction) => {
	try {
		let reponse = await ControleurPermis.getControleurPermis().determinerAction(req);
		res.header("Content-type", "application/json");
		res.header("Charset", "utf8");
		res.send(reponse); 
	}
	catch(err) { next(err); }
});

app.use(( err: Error, req: Request, res: Response, next: NextFunction ) : void => {
	console.log(err);
});

// var test:any[];
// var test:any[...Array(30)].map((e) => ((Math.random() * 36) | 0).toString(36)).join('')
// Array.toString()

// console.log();

// const genAPIKey = () => {
//     //create a base-36 string that contains 30 chars in a-z,0-9
//     return [...Array(30)]
//       .map((e) => ((Math.random() * 36) | 0).toString(36))
//       .join('');
//   };
// let test=5;
// console.log(test.toString(36));
  



