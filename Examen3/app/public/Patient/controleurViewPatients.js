// function listerPatients(listePatients){
// 	var rep, i, taille;
// 	taille = listePatients.length;
// 	rep = "	<div id=\"listePatients\">\n"; 
// 	for (i=0;i<taille;i++) {
// 		rep += "		<div class=\"w3-card-4\" style=\"width:20em;height:34.34em;float:left;margin-right:15px;margin-top:15px\">\n"; 
// 		rep += "		  <img src=\"/serveur/pochettes/"+listePatients[i].pochette+"\" style=\"width:20em;height:25.34em;\">\n"; 
// 		rep += "		  <div class=\"w3-container w3-left\">\n"; 
// 		rep += "			<h5><i>Numéro : "+listePatients[i].idf+"</i><br>\n"; 
// 		rep += "			    <i>nom :  "+listePatients[i].nom+"</i><br>\n"; 
// 		rep += "			    <i>Durée :  "+listePatients[i].duree+"</i></h5>\n";
// 		rep += "			    <i>Durée :  "+listePatients[i].realisateur+"</i></h5>\n";
// 		rep += "		  </div>\n"; 
// 		rep += "		</div>\n";
// 	}
// 	rep += "		</div>\n"; 
// 	rep += "	</div>\n";
// 	$('#contenu').html(rep);//document.getElementById('contenu').innerHTML=rep;
// 	$('#fenetre').show();
// }

function listerPatients(listePatients) {
	var rep, i, taille;
	taille = listePatients.length;
	rep = `
		<table class="table table-striped">
			<thead>
				<tr>
				<th scope="col">ID</th>
				<th scope="col">Nom</th>
				<th scope="col">Prénom</th>
				<th scope="col">Naissance</th>
				<th scope="col">Sexe</th>
				<th scope="col">Adresse</th>
				<th scope="col">CP</th>
				<th scope="col">Fumeur</th>
				</tr>
			</thead>
			<tbody>
	`; 
	// <td>${listePatients[i].fumeur}</td>
	console.log("listePatients[1].nom = " + listePatients[1].nom);
	for (i = 0; i < taille; i++) {
		rep += 
		`<tr>
        <th scope="row">${listePatients[i].idp}</th>
        <td>${listePatients[i].nom}</td>
        <td>${listePatients[i].prenom}</td>
        <td>${listePatients[i].daten}</td>
        <td>${listePatients[i].sexe}</td>
        <td>${listePatients[i].adresse}</td>
        <td>${listePatients[i].cp}</td>
        <td>${(listePatients[i].fumeur) == 0 ? "Non" : "Oui"}</td>
    </tr>`;
	}
	rep += "</tbody></table>";
	// $('#contenu').html(rep);//document.getElementById('contenu').innerHTML=rep;
	document.getElementsByClassName('contenu')[0].innerHTML = rep;
	$('#fenetre').show();
	console.log("listePatients = " + listePatients);
}

function obtenirFormPatient(){
	var rep;
	rep = "<form id=\"formNouveau\" name=\"formNouveau\">\n";
	rep+= "  <h3>Dossier du Patient <span id=\"rf\"></span></h3><br>\n";

	rep+= "    <label>Nom:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"nom\" name=\"nom\" placeholder=\"Nom\">\n"; 


	rep+= "    <label>Prénom:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"prenom\" name=\"prenom\" placeholder=\"Prénom\">\n"; 


	rep+= "    <label>Date de naissance:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"daten\" name=\"daten\" placeholder=\"Date de naissance\">\n"; 


	rep+= "    <label>Sexe:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"sexe\" name=\"sexe\" placeholder=\"Sexe\">\n"; 


	rep+= "    <label>Adresse:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"adresse\" name=\"adresse\" placeholder=\"Adresse\">\n"; 


	rep+= "    <label>Code postal:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"cp\" name=\"cp\" placeholder=\"Code postal\">\n"; 


	rep+= "    <label>Fumeur:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"fumeur\" name=\"fumeur\" placeholder=\"Fumeur '0' ou '1'\">\n"; 
	rep+= "  <br>\n"; 

	rep+= "<button type=\"button\"  class=\"w3-btn w3-green w3-ripple\" onClick=\"requetesServeurPatients('enregistrer');\">&#10004; Enregistrer</button>\n"; 
	rep+= "</form>\n";
	$('#contenu').html(rep);
	$('#fenetre').show();
}
// private nom: string = "";
// private prenom: string = "";
// private daten: string = "";
// private sexe: string = "";
// private adresse: string = "";
// private cp: string = "";
// private fumeur: boolean = false;

function obtenirFormEnleverPatient(){
	var strVar="";
	strVar += "<form id=\"montrerE\" name=\"montrerE\">";
	strVar += "  <h3>Enlever Patient<\/h3><br>";
	strVar += "    <label>Numéro:<\/label>";
	strVar += "    <input class=\"w3-input w3-border\" type=\"text\" id=\"num\" name=\"num\" placeholder=\"Numéro\">";
	strVar += "  <br>";
	strVar += "<button type=\"button\"  class=\"w3-btn w3-green w3-ripple\" onClick=\"requetesServeurPatients('enlever');\">&#10004; Enlever</button>\n"; 
	strVar += "<\/form>";
	$('#contenu').html(strVar);
	$('#fenetre').show();
}

function montrerMessage(message){
	$('#message').html(message.msg);
}

function montrerForm(formPatients){
	$('#contenu').html(obtenirFormPatients('fiche'));
	$('#idf').val(formPatients.idf);
	$('#nom').val(formPatients.nom);
	$('#duree').val(formPatients.duree);
	$('#realisateur').val(formPatients.realisateur);
}

//Controleur de View
 const gestionViewPatients = function (donnees, action){
	switch(action){
		case 'listerTous' :
		    listerPatients(donnees);
			break;
		case 'listerNonFumeurs' :
			listerPatients(donnees);
			break;
		case 'modifier' :
		case 'enregistrer' :
		    montrerMessage(donnees);
		break;
		case 'fiche' :
		    montrerForm(donnees);
			$('#rf').html(donnees.idf);
		break;
	}	
}