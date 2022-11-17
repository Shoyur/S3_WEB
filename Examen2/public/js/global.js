const listerEtudiants = (arg) => {

    let spec = {};
    spec['tous'] = function() { spec = { key: "tous" }; };
    spec['ville'] = function() { spec = { key: arg, value: document.getElementById('inputVille').value }; };
    spec[arg]();

    $.ajax({
        url: '/etudiants',
        type: "POST",
        data: spec,
        dataType: 'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listeEtudiants) => {
            let combien = 0;
            if (listeEtudiants == null) { return; }
            let texteListe = "";
            let texteListeTemp = "";
            for (let unEtudiant of listeEtudiants) { 
                texteListeTemp += construireTR(unEtudiant);
                combien++;
            }
            texteListe += construireEntetes();
            texteListe += "Il y a <b>" + combien + "</b> résultats :<br><br>";
            texteListe += texteListeTemp;
            texteListe += "</tbody></table>";
            document.getElementsByClassName('container')[0].innerHTML = texteListe;
            document.getElementById('contenu-d').style.display = 'block';
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source Etudiants n'a pu être chargé.\nRaison:\n${e.message}`); }
    });
}

const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Ville</th>
                <th scope="col">État</th>
                <th scope="col">Sexe</th>
                <th scope="col">Status</th>
                <th scope="col">Domaine</th>
                <th scope="col">Pays</th>
                <th scope="col">Age</th>
                <th scope="col">SAT</th>
                <th scope="col">Moy.</th>
                <th scope="col">Grandeur</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

// "ID": "1",
// "LastName": "DOE01",
// "FirstName": "JANE01",
// "City": "Los Angeles",
// "State": "California",
// "Gender": "Female",
// "StudentStatus": "Graduate",
// "Major": "Politics",
// "Country": "US",
// "Age": "30",
// "SAT": "2263",
// "Grade ": "67",
// "Height": "61"

const construireTR = (unEtudiant) =>{
    let tr=`<tr>
        <th>${unEtudiant.ID}</th>
        <td>${unEtudiant.LastName}</td>
        <td>${unEtudiant.FirstName}</td>
        <td>${unEtudiant.City}</td>
        <td>${unEtudiant.State}</td>
        <td>${unEtudiant.Gender}</td>
        <td>${unEtudiant.StudentStatus}</td>
        <td>${unEtudiant.Major}</td>
        <td>${unEtudiant.Country}</td>
        <td>${unEtudiant.Age}</td>
        <td>${unEtudiant.SAT}</td>
        <td>${unEtudiant.Grade}</td>
        <td>${unEtudiant.Height}</td>
    </tr>`;
    return tr;
}

const afficherMoy = () => {
    let discipline = document.getElementById('inputDiscipline').value;
    spec = { key: "", value: discipline };
    console.log("");
    $.ajax({
        url: '/afficherMoy',
        type: "POST",
        data: spec,
        dataType: 'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listeEtudiants) => {
            document.getElementById('contenu-d').style.display = 'none';
            let combien = 0;
            let moyenne = 0;
            for (let unEtudiant of listeEtudiants) { 
                moyenne += parseInt(unEtudiant.Age);
                combien++;
            }
            document.getElementById('texteMoy').style.display = 'block';

            if (moyenne == 0) {
                document.getElementById("texteMoy").innerHTML = `Aucun étudiant dans cette discipline...`;
            }
            else {
                moyenne = moyenne / combien;
                document.getElementById("texteMoy").innerHTML = `Âge moyenne pour la discipline "${discipline}" est de ${moyenne.toFixed(2)}`;
            }            
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source Etudiants n'a pu être chargé.\nRaison:\n${e.message}`); }
    });
}


const buttonVilleClick = () => {
    hideAll();
    document.getElementById('inputVille').style.display = 'block';
    document.getElementById('buttonGoVille').style.display = 'block';
}

const buttonDisciplineClick = () => {
    hideAll();
    document.getElementById('inputDiscipline').style.display = 'block';
    document.getElementById('buttonGoDiscipline').style.display = 'block';
}

const hideAll = () => {
    document.getElementById('inputVille').style.display = 'none';
    document.getElementById('inputVille').value = '';
    document.getElementById('buttonGoVille').style.display = 'none';
    document.getElementById('inputDiscipline').style.display = 'none';
    document.getElementById('inputDiscipline').value = '';
    document.getElementById('buttonGoDiscipline').style.display = 'none';
    document.getElementById('texteMoy').style.display = 'none';
}

const buttonVille = document.getElementById('buttonVille');
const buttonDiscipline = document.getElementById('buttonDiscipline');

const inputVille = document.getElementById('inputVille');
const buttonGoVille = document.getElementById('buttonGoVille');
const inputDiscipline = document.getElementById('inputDiscipline');
const buttonGoDiscipline = document.getElementById('buttonGoDiscipline');

inputVille.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerEtudiants('ville'); } 
});
inputDiscipline.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { afficherMoy(); } 
});

document.addEventListener('click', function(e) {
    if (
           !inputVille.contains(e.target)
        && !buttonGoVille.contains(e.target)
        && !inputDiscipline.contains(e.target)
        && !buttonGoDiscipline.contains(e.target)
        && !buttonVille.contains(e.target)
        && !buttonDiscipline.contains(e.target)
        ) 
        {
        hideAll();
    }
});


  