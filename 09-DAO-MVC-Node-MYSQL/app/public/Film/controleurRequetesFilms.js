let requetesServeurFilms = function(action){
	switch (action){
		case "lister":
			$.ajax({
				type : "POST",
				url : '/Film',
				data : {'action':'lister'},
				dataType : 'json',
				success : function (jsonFilms){//alert(jsonFilms);
					gestionViewFilms(jsonFilms,'lister');
				},
				fail : function (){
				}
			});
		break;
		case "enregistrer":
			var formFilm = new FormData(document.getElementById('formNouveau'));
			formFilm.append('action','enregistrer');
			$.ajax({
				type : 'POST',
				url : '/Film',
				data : formFilm,
				dataType : 'json',
				contentType : false,
				processData : false,
				success : function (reponse) {
				    $('#formNouveau')[0].reset();
					gestionViewFilms(reponse,'enregistrer');
					vider('message');
				},
				fail : function (){
				}
			});
		break;
		case 'enlever' :
			let idf=$('#num').val(); 
			$.ajax({
			  type: "POST",
			  url: "/Film",
			  data: { "action": "enlever","idf":idf},
			  dataType : 'json',
			  success : function(reponse){//alert(reponse);
					  $('#montrerE')[0].reset();
					  gestionViewFilms(reponse,'enlever');
					  vider('message'); 
			  },
			  fail : function(){

			  }
			});
		break;
		case 'fiche' :
			$.ajax({
			  type: "POST",
			  url: "/Film",
			  data: { "action": "fiche","idf":$('#idf').val()},
			  dataType : 'json',
			  success : function(formFilms){//alert(JSON.stringify(formFilms));
					if(formFilms.length > 0)
					  gestionViewFilms(formFilms[0],'fiche');
					else{
						let message={};
						message.msg="Film introuvable";
						$('#formM')[0].reset();
					 	montrerMessage(message);
					 	vider('message');}
			  },
			  fail : function(){
			  
			  }
			});
		break;
		case 'modifier' :
			var formFilm = new FormData(document.getElementById('formNouveau'));
			formFilm.append('action','modifier');
			$.ajax({
				type : 'POST',
				url : '/Film',
				data : formFilm,
				dataType : 'json', //text pour le voir en format de string
				contentType : false,
				processData : false,
				success : function (reponse){//alert(JSON.stringify(reponse));
							gestionViewFilms(reponse,'modifier');
							vider('message');
							$('#contenu').html("");
				},
				fail : function (){
				}
			});
		break;
	}
}