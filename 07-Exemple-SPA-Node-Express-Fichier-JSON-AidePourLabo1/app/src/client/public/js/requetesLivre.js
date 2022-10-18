let listeFilms = null;

const chargerLivresJSON = () => {
    $.ajax({
        url:"/livre",
        type:"GET",
        data:{},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
            //alert(reponse);
             listeLivres = reponse;
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let listerParAuteur = () => {
    let numA = document.getElementById('numa').value;

    $.ajax({
        url:"/auteur",
        type:"POST",
        data:{'numAuteur':numA},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listeLivresDeAuteur) => {
            //alert(reponse);
             listerLivresAuteur(listeLivresDeAuteur);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

