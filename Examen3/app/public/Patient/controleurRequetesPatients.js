let requetesServeurPatients = function(action) {

	switch (action){ 

		case "enregistrer":
			formPatient.append('action','enregistrer');
			$.ajax({
				type : 'POST',
				url : '/Patient',
				data : {
					action: 'enregistrer',
					nom: "",
				},
				dataType : 'json',
				contentType : false,
				processData : false,
				success : function (reponse) {
				    $('#formNouveau')[0].reset();
					gestionViewPatients(reponse,'enregistrer');
					vider('message');
				},
				fail : function (){
				}
			});
		break;
		// private nom: string = "";
// private prenom: string = "";
// private daten: string = "";
// private sexe: string = "";
// private adresse: string = "";
// private cp: string = "";
// private fumeur: boolean = false;

		case "listerTous":
			$.ajax({
				type : "POST",
				url : '/Patient',
				data : {'action':'listerTous'},
				dataType : 'json',
				success : function (jsonPatients){
					gestionViewPatients(jsonPatients,'listerTous');
				},
				fail : function (){
				}
			});
		break;

		case "listerNonFumeurs":
			$.ajax({
				type : "POST",
				url : '/Patient',
				data : {'action':'listerNonFumeurs'},
				dataType : 'json',
				success : function (jsonPatients){
					gestionViewPatients(jsonPatients,'listerNonFumeurs');
				},
				fail : function (){
				}
			});
		break;

		case 'enlever' :
			let idp=$('#num').val(); 
			$.ajax({
			  type: "POST",
			  url: "/Patient",
			  data: { "action": "enlever","idp":idp},
			  dataType : 'json',
			  success : function(reponse){//alert(reponse);
					  $('#montrerE')[0].reset();
					  gestionViewPatients(reponse,'enlever');
					  vider('message'); 
			  },
			  fail : function(){

			  }
			});
		break;

	}
}