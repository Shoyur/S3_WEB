const buttonGoCreatePClick = () => {
    $.ajax({
        url: '/permis/' + '?apikey=' + document.getElementById('inputApikey').value,
        type: "PUT",
        data: {
            ville: document.getElementById('inputCreatePVille').value,
            espece: document.getElementById('inputCreatePEspece').value,
            nom: document.getElementById('inputCreatePNom').value
        },
        dataType: 'json',
        async: true,
        success: (reponse) => {
            document.getElementsByClassName('container')[0].innerHTML = reponse.donnees; /////////////////////////////////////////////////
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source des permis n'a pu être chargé ou manipulé....\nRaison:\n${e.message}`); }
    });
}

const buttonGoCreateUClick = () => {
    $.ajax({
        url: '/usager',
        type: "PUT",
        data: {
            nom: document.getElementById('inputCreateUNom').value,
            prenom: document.getElementById('inputCreateUPrenom').value,
            courriel: document.getElementById('inputCreateUCourriel').value,
            motdepasse: document.getElementById('inputCreateUPass').value
        },
        dataType: 'json',
        async: true,
        success: (reponse) => {
            document.getElementById('inputApikey').value = reponse.apikey;
            document.getElementsByClassName('container')[0].innerHTML = reponse.donnees; /////////////////////////////////////////////////
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source des permis n'a pu être chargé ou manipulé....\nRaison:\n${e.message}`); }
    });
}

const listerPermis = (option) => {
    let url = '/permis';
    if (option == "numero") {
        if (!document.getElementById('inputNumberL').value) { return; }
        url = '/permis/' + document.getElementById('inputNumberL').value; 
    }
    $.ajax({
        url: url,
        type: "GET",
        data: { apikey: document.getElementById('inputApikey').value },
        dataType: 'json',
        async: true,
        success: (reponse) => {
            if (reponse.status != "OK") {
                document.getElementsByClassName('container')[0].innerHTML = reponse.donnees;
                return;
            }
            let combien = 0;
            let texteListe = "";
            let texteListeTemp = "";
            for (let unPermis of reponse.donnees) {
                texteListeTemp += construireTR(unPermis);
                combien++;
            }
            texteListe += construireEntetes();
            texteListe += "Il y a <b>" + combien + "</b> résultats :<br><br>";
            texteListe += texteListeTemp;
            texteListe += "</tbody></table>";
            document.getElementsByClassName('container')[0].innerHTML = texteListe;
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source des permis n'a pu être chargé ou manipulé...\nRaison:\n${e.message}`); }
    });
}

const buttonDeleteClickGo = () => {
    if (!document.getElementById('inputNumberD').value) { return; }
    $.ajax({
        url: '/permis/' + document.getElementById('inputNumberD').value + '?apikey=' + document.getElementById('inputApikey').value,
        type: "DELETE",
        // data: { apikey: document.getElementById('inputApikey').value },
        dataType: 'json',
        async: true,
        success: (reponse) => {
            if (reponse.status != "OK") {
                document.getElementsByClassName('container')[0].innerHTML = reponse.donnees;
                return;
            }
            document.getElementsByClassName('container')[0].innerHTML = reponse.donnees;
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source des permis n'a pu être chargé ou manipulé...\nRaison:\n${e.message}`); }
    });
}