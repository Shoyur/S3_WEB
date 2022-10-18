let listePermis = null;

const chargerPermisJSON = () => {
    $.ajax({
        url:"/permis",
        type:"GET",
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
             listePermis = reponse;
        },
        fail: (e) => {
            alert(`Erreur!\nLe fichier source des permis n'a pu être chargé.\nRaison:\n${e.message}`);
        }
    });
}

const listerTous = () => {
    if (listePermis == null) { return; }
    let resultat = construireEntetes();
    for (let unPermis of listePermis) { resultat += construireTR(unPermis); }
    resultat += "</tbody></table>";
    document.getElementsByClassName('container')[0].innerHTML = resultat;
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

const listerSelonAnimal = () => {
    let animal = prompt("Entrez le type de permis :");
    if (animal == null) { return; }
    let resultat = construireEntetes();
    for (let unPermis of listePermis) {
        if (unPermis.Animal_Type_de_permis == animal) {
            resultat += construireTR(unPermis); 
        }
    }
    resultat += "</tbody></table>";
    document.getElementsByClassName('container')[0].innerHTML = resultat;
}

const listerSelonVille = () => {
    let ville = prompt("Entrez la ville :");
    if (ville == null) { return; }
    let resultat = construireEntetes();
    for (let unPermis of listePermis) {
        if (unPermis.Gardien_Territoire_ex_villes == ville) {
            resultat += construireTR(unPermis); 
        }
    }
    resultat += "</tbody></table>";
    document.getElementsByClassName('container')[0].innerHTML = resultat;
}

const listerExpirentQuand = () => {

}

const listerTousMaisTries = () => {

}