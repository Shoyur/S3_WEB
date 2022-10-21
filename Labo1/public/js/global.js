const lister = (arg) => {
    var spec;
    switch (arg) {
        case '/tous': { 
            spec = null;
            break;
        }
        case '/animal': {
            spec = {
                key: "Animal_Type_de_permis",
                value: prompt("Entrez un animal :")
};
            break;
        }
        case '/ville': { 
            spec = {
                key: "Gardien_Territoire_ex_villes",
                value: prompt("Entrez une ville :")
            };
            break;
        }
        case '/expire': { 
            spec = null;
            break;
        }
        case '/tries': { 
            spec = null; 
            break;
        }

    }


    $.ajax({
        url: arg,
        type: "POST",
        data: spec,
        dataType: 'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listePermis) => {
            let combien = 0;
            if (listePermis == null) { return; }
            let texteListe = "";
            let texteListeTemp = "";
            for (let unPermis of listePermis) { 
                texteListeTemp += construireTR(unPermis);
                combien++;
            }
            
            texteListe += construireEntetes();
            texteListe += "Il y a <b>" + combien + "</b> résultats :<br><br>";
            texteListe += texteListeTemp;
            texteListe += "</tbody></table>";
            
            document.getElementsByClassName('container')[0].innerHTML = texteListe;
        },
        fail: (e) => {
            alert(`Erreur!\nLe fichier source des permis n'a pu être chargé.\nRaison:\n${e.message}`);
        }
        
    });
    // if (typeL == "animal") {
    //     console.log("fin commande lister()");
    // }
}

const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Numéro</th>
                <th scope="col">Date Début</th>
                <th scope="col">Date Fin</th>
                <th scope="col">Ville</th>
                <th scope="col">Animal</th>
                <th scope="col">Nom</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (unPermis) =>{
    let tr=`<tr>
        <th scope="row">${unPermis.Permis_Numéro}</th>
        <td>${unPermis.Permis_Date_de_début}</td>
        <td>${unPermis.Permis_Date_de_fin}</td>
        <td>${unPermis.Gardien_Territoire_ex_villes}</td>
        <td>${unPermis.Animal_Type_de_permis}</td>
        <td>${unPermis.Animal_Nom}</td>
    </tr>`;
    return tr;
}