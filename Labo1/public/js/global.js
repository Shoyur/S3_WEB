const listerPermis = (arg) => {

    let spec = {};
    spec['tous'] = function() { spec = { key: "tous" }; };
    spec['animal'] = function() { spec = { key: arg, value: prompt("Entrez un animal :") }; };
    spec['ville'] = function() { spec = { key: arg, value: prompt("Entrez une ville :") }; };
    spec['expire'] = function() { spec = { key: arg, an: prompt("Entrez une année :"), mois: prompt("Entrez un mois :") }; };
    spec['tries'] = function() { spec = { key: "tries" }; };
    spec[arg]();

    $.ajax({
        url: '/permis',
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
        fail: (e) => { alert(`Erreur!\nLe fichier source des permis n'a pu être chargé.\nRaison:\n${e.message}`); }
    });
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

const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
  })
  