const chargerFilmsJSON = () => {
    $.ajax({
        url: "/films",
        type: "GET",
        data: {"action" : "fichier films"},
        dataType: "text", // json, xml, ou text
        async: true, // est true par défaut, mais si false, va tout arrêter pour attendre cette requête
        success: (listeFilms) => { // équivalent d'un "then", mettra le résultat dans "listeFilms"
            alert(listeFilms);
        },
        fail: (e) => {
            alert("Gros problème : " + e.message);
        }
    });
}