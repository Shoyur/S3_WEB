function listerFilms(listeFilms){
	var rep, i, taille;
	taille=listeFilms.length;
	rep = "	<div id=\"listeFilms\">\n"; 
	for(i=0;i<taille;i++){
		rep += "		<div class=\"w3-card-4\" style=\"width:20em;height:34.34em;float:left;margin-right:15px;margin-top:15px\">\n"; 
		rep += "		  <img src=\"/serveur/pochettes/"+listeFilms[i].pochette+"\" style=\"width:20em;height:25.34em;\">\n"; 
		rep += "		  <div class=\"w3-container w3-left\">\n"; 
		rep += "			<h5><i>Numéro : "+listeFilms[i].idf+"</i><br>\n"; 
		rep += "			    <i>Titre :  "+listeFilms[i].titre+"</i><br>\n"; 
		rep += "			    <i>Durée :  "+listeFilms[i].duree+"</i></h5>\n";
		rep += "			    <i>Durée :  "+listeFilms[i].realisateur+"</i></h5>\n";
		rep += "		  </div>\n"; 
		rep += "		</div>\n";
	}
	rep += "		</div>\n"; 
	rep += "	</div>\n";
	$('#contenu').html(rep);//document.getElementById('contenu').innerHTML=rep;
	$('#fenetre').show();
}

function obtenirFormFilms(provenance){
	var rep;
	rep = "<form id=\"formNouveau\" name=\"formNouveau\">\n";
	if (provenance=="enregistrer")
		rep+= "  <h3>Nouveau film</h3><br>\n"; 
	else
		rep+= "  <h3>Dossier du film <span id=\"rf\"></span></h3><br>\n";
	rep+= "    <label>Titre:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"titre\" name=\"titre\" placeholder=\"Titre\">\n"; 
	rep+= "  <br>\n"; 
	rep+= "    <br>\n"; 
	rep+= "    <label>Durée:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"duree\" name=\"duree\" placeholder=\"\">\n"; 
	rep+= "  <br>\n"; 
	rep+= "  <br>\n"; 
	rep+= "    <label>Réalisateur:</label>\n"; 
	rep+= "    <input class=\"w3-input w3-border\" type=\"text\" id=\"realisateur\" name=\"realisateur\" placeholder=\"\">\n"; 
	rep+= "  <br>\n"; 
	rep+= "  <br>\n"; 
	rep+= "    <label>Pochette:</label>\n"; 
	rep+= "	<input class=\"w3-input w3-border\" type=\"file\" id=\"pochette\" name=\"pochette[]\" />\n"; 
	rep+= "  <br>\n";
	if (provenance=="enregistrer")	
		rep+= "<button type=\"button\"  class=\"w3-btn w3-green w3-ripple\" onClick=\"requetesServeurFilms('enregistrer');\">&#10004; Enregistrer</button>\n"; 
	else
		if (provenance=="fiche"){
			rep+= "<input type=\"hidden\" id=\"idf\" name=\"idf\" value=\"\">";
			rep+= "<button type=\"button\"  class=\"w3-btn w3-green w3-ripple\" onClick=\"requetesServeurFilms('modifier');\">&#10004; Modifier</button>\n"; 
	    }
	rep+= "</form>\n";
	$('#contenu').html(rep);
	$('#fenetre').show();
}

function obtenirFormEnleverFilm(){
	var strVar="";
	strVar += "<form id=\"montrerE\" name=\"montrerE\">";
	strVar += "  <h3>Enlever film<\/h3><br>";
	strVar += "    <label>Numéro:<\/label>";
	strVar += "    <input class=\"w3-input w3-border\" type=\"text\" id=\"num\" name=\"num\" placeholder=\"Numéro\">";
	strVar += "  <br>";
	strVar += "<button type=\"button\"  class=\"w3-btn w3-green w3-ripple\" onClick=\"requetesServeurFilms('enlever');\">&#10004; Enlever</button>\n"; 
	strVar += "<\/form>";
	$('#contenu').html(strVar);
	$('#fenetre').show();
}
function obtenirFormModifierFilm(){
	var strVar="";
	strVar += "<form id=\"formM\" name=\"formM\">";
	strVar += "  <h3>Modifier film<\/h3><br>";
	strVar += "    <label>Numéro:<\/label>";
	strVar += "    <input class=\"w3-input w3-border\" type=\"text\" id=\"idf\" name=\"idf\" placeholder=\"Numéro\">";
	strVar += "	   <input type=\"hidden\" name=\"fiche\" value=\"fiche\">";
	strVar += "  <br>";
	strVar += "<button type=\"button\"  class=\"w3-btn w3-green w3-ripple\" onClick=\"requetesServeurFilms('fiche');\">&#10004; Obtenir dossier</button>\n"; 
	strVar += "<\/form>";
	$('#contenu').html(strVar);
	$('#fenetre').show();
}

function montrerMessage(message){
	$('#message').html(message.msg);
}

function montrerForm(formFilms){
	$('#contenu').html(obtenirFormFilms('fiche'));
	$('#idf').val(formFilms.idf);
	$('#titre').val(formFilms.titre);
	$('#duree').val(formFilms.duree);
	$('#realisateur').val(formFilms.realisateur);
}

//Controleur de View
 const gestionViewFilms = function (donnees,action){
	switch(action){
		case 'lister' :
		    listerFilms(donnees);
		break;
		case 'enlever' :
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