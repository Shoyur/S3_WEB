const listerPermis = (arg) => {

    let spec = {};
    spec['tous'] = function() { spec = { key: "tous" }; };
    spec['animal'] = function() { spec = { key: arg, value: document.getElementById('inputAnimal').value }; };
    spec['ville'] = function() { spec = { key: arg, value: document.getElementById('inputVille').value }; };
    spec['expire'] = function() { spec = { key: arg, an: document.getElementById('inputAnnee').value, 
                                                    mois: document.getElementById('inputMois').value }; };
    spec['tries'] = function() { spec = { key: "tries" }; };
    spec[arg]();

    $.ajax({
        url: '/permis',
        type: "POST",
        data: spec,
        dataType: 'json',
        async: true,
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

const buttonAnimalClick = () => {
    hideAll();
    document.getElementById('inputAnimal').style.display = 'block';
    document.getElementById('buttonGoAnimal').style.display = 'block';
}

const buttonVilleClick = () => {
    hideAll();
    document.getElementById('inputVille').style.display = 'block';
    document.getElementById('buttonGoVille').style.display = 'block';
}

const buttonExpireClick = () => {
    hideAll();
    document.getElementById('inputMois').style.display = 'block';
    document.getElementById('inputAnnee').style.display = 'block';
    document.getElementById('buttonGoExpire').style.display = 'block';
}

const hideAll = () => {
    document.getElementById('inputAnimal').style.display = 'none';
    document.getElementById('inputAnimal').value = '';
    document.getElementById('buttonGoAnimal').style.display = 'none';
    document.getElementById('inputVille').style.display = 'none';
    document.getElementById('inputVille').value = '';
    document.getElementById('buttonGoVille').style.display = 'none';
    document.getElementById('inputMois').style.display = 'none';
    document.getElementById('inputMois').value = '';
    document.getElementById('inputAnnee').style.display = 'none';
    document.getElementById('inputAnnee').value = '';
    document.getElementById('buttonGoExpire').style.display = 'none';
}

const buttonAnimal = document.getElementById('buttonAnimal');
const buttonVille = document.getElementById('buttonVille');
const buttonExpire = document.getElementById('buttonExpire');

const inputAnimal = document.getElementById('inputAnimal');
const buttonGoAnimal = document.getElementById('buttonGoAnimal');
const inputVille = document.getElementById('inputVille');
const buttonGoVille = document.getElementById('buttonGoVille');
const inputMois = document.getElementById('inputMois');
const inputAnnee = document.getElementById('inputAnnee');
const buttonGoExpire = document.getElementById('buttonGoExpire');

inputAnimal.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerPermis('animal'); } 
});
inputVille.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerPermis('ville'); } 
});
inputAnnee.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerPermis('expire'); } 
});
inputMois.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerPermis('expire'); } 
});

document.addEventListener('click', function(e) {
    if (!inputAnimal.contains(e.target)
        && !buttonGoAnimal.contains(e.target)
        && !inputVille.contains(e.target)
        && !buttonGoVille.contains(e.target)
        && !inputMois.contains(e.target)
        && !inputAnnee.contains(e.target)
        && !buttonGoExpire.contains(e.target)

        && !buttonAnimal.contains(e.target)
        && !buttonVille.contains(e.target)
        && !buttonExpire.contains(e.target)
        ) 
        {
        hideAll();
    }
});