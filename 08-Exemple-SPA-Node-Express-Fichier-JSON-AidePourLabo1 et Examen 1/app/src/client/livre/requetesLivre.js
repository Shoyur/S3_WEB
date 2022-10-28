let compareTo = (unLivre, unAutrelivre) => {
                        if(unLivre.Categorie > unAutrelivre.Categorie){
                            return 1;
                        }else if(unLivre.Categorie < unAutrelivre.Categorie){
                            return -1;
                        } else{
                            return 0;
                        }
                };

const listerToutSelonCategorie = () => {
    $.ajax({
        url:"/livre",
        type:"GET",
        data:{},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
            //alert(reponse);
             lister(reponse.sort(compareTo)); // Tri par Categorie
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let listerParAuteur = () => {
    let numA = document.getElementById('numa').value;

    $.ajax({
        url:"/listerParAuteur",
        type:"POST",
        data:{'numAuteur':numA},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listeLivresDeAuteur) => {
            //alert(listeLivresDeAuteur);
            lister(listeLivresDeAuteur);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let listerEntreDeuxAnnees = () => {
    let and = document.getElementById('and').value;
    let anf = document.getElementById('anf').value;

    if(and <= anf){
        $.ajax({
            url:"/listerEntreDeuxAnnees",
            type:"POST",
            data:{'anneed':and, 'anneef':anf},
            dataType:'json',  // json, xml, text
            async: true, // false pour se  mettre en mode synchrone.
            success: (listeLivresEntreDeuxAnnees) => {
                //alert(listeLivresEntreDeuxAnnees);
                lister(listeLivresEntreDeuxAnnees);
            },
            fail: (e) => {
                alert(`Gros probléme : ${e.message}`);
            }
        });
    } else {
        alert("L'année du début doit être <= à l'année de la fin");
    }
}

