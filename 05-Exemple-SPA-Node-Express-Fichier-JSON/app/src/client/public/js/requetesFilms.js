let listeFilms = null;

const chargerFilmsJSON = () => {
    $.ajax({
        url:"/films",
        type:"POST",
        data:{"action":"fichier","nom":"films.json"},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
             listeFilms = reponse;
              document.getElementById('contenu').innerHTML = "<strong>Le fichier a été chargé.</strong>";
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
    console.log("Requête envoyée au serveur.");
}

