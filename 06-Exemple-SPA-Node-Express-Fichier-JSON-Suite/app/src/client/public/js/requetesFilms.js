let listeFilms = null;

const chargerFilmsJSON = () => {
    $.ajax({
        url:"/films",
        type:"POST",
        data:{"action":"fichier","nom":"films.json"},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
            //alert(reponse);
             listeFilms = reponse;
             document.getElementsByClassName('container')[0].innerHTML = "<strong>Le fichier a été chargé.</strong>";
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

