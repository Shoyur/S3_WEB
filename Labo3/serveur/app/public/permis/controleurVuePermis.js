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

const buttonCreateUClick = () => {
    hideAll();
    document.getElementById('inputCreateUNom').style.display = 'block';
    document.getElementById('inputCreateUPrenom').style.display = 'block';
    document.getElementById('inputCreateUCourriel').style.display = 'block';
    document.getElementById('inputCreateUPass').style.display = 'block';
    document.getElementById('buttonGoCreateU').style.display = 'block';
}

const buttonCreatePClick = () => {
    hideAll();
    document.getElementById('inputCreatePVille').style.display = 'block';
    document.getElementById('inputCreatePEspece').style.display = 'block';
    document.getElementById('inputCreatePNom').style.display = 'block';
    document.getElementById('buttonGoCreateP').style.display = 'block';
}

const buttonNumberClick = () => {
    hideAll();
    document.getElementById('inputNumberL').style.display = 'block';
    document.getElementById('buttonGoNumber').style.display = 'block';
}

const buttonDeleteClick = () => {
    hideAll();
    document.getElementById('inputNumberD').style.display = 'block';
    document.getElementById('buttonGoDelete').style.display = 'block';
}


const hideAll = () => {
    document.getElementById('inputCreateUNom').style.display = 'none';
    document.getElementById('inputCreateUNom').value = '';
    document.getElementById('inputCreateUPrenom').style.display = 'none';
    document.getElementById('inputCreateUPrenom').value = '';
    document.getElementById('inputCreateUCourriel').style.display = 'none';
    document.getElementById('inputCreateUCourriel').value = '';
    document.getElementById('inputCreateUPass').style.display = 'none';
    document.getElementById('inputCreateUPass').value = '';
    document.getElementById('buttonGoCreateU').style.display = 'none';

    document.getElementById('inputCreatePVille').style.display = 'none';
    document.getElementById('inputCreatePVille').value = '';
    document.getElementById('inputCreatePEspece').style.display = 'none';
    document.getElementById('inputCreatePEspece').value = '';
    document.getElementById('inputCreatePNom').style.display = 'none';
    document.getElementById('inputCreatePNom').value = '';
    document.getElementById('buttonGoCreateP').style.display = 'none';

    document.getElementById('inputNumberL').style.display = 'none';
    document.getElementById('inputNumberL').value = '';
    document.getElementById('buttonGoNumber').style.display = 'none';

    document.getElementById('inputNumberD').style.display = 'none';
    document.getElementById('inputNumberD').value = '';
    document.getElementById('buttonGoDelete').style.display = 'none';
}


const buttonCreateU = document.getElementById('buttonCreateU');
const inputCreateUNom = document.getElementById('inputCreateUNom');
const inputCreateUPrenom = document.getElementById('inputCreateUPrenom');
const inputCreateUCourriel = document.getElementById('inputCreateUCourriel');
const inputCreateUPass = document.getElementById('inputCreateUPass');
const buttonGoCreateU = document.getElementById('buttonGoCreateU');

const inputApikey = document.getElementById('inputApikey');

const buttonCreateP = document.getElementById('buttonCreateP');
const inputCreatePVille = document.getElementById('inputCreatePVille');
const inputCreatePEspece = document.getElementById('inputCreatePEspece');
const inputCreatePNom = document.getElementById('inputCreatePNom');
const buttonGoCreateP = document.getElementById('buttonGoCreateP');

const buttonListerAll = document.getElementById('buttonListerAll')

const buttonNumber = document.getElementById('buttonNumber');
const inputNumberL = document.getElementById('inputNumberL');
const buttonGoNumber = document.getElementById('buttonGoNumber');

const buttonDelete = document.getElementById('buttonDelete');
const inputNumberD = document.getElementById('inputNumberD');
const buttonGoDelete = document.getElementById('buttonGoDelete');


// unInput.addEventListener('keydown', function(e) { 
//     if (e.key === 'Enter') { uneFonction(); } 
// });


document.addEventListener('click', function(e) {
    if (!buttonCreateU.contains(e.target)
        && !inputCreateUNom.contains(e.target)
        && !inputCreateUPrenom.contains(e.target)
        && !inputCreateUCourriel.contains(e.target)
        && !inputCreateUPass.contains(e.target)
        && !buttonGoCreateU.contains(e.target)

        && !inputApikey.contains(e.target)

        && !buttonCreateP.contains(e.target)
        && !inputCreatePVille.contains(e.target)
        && !inputCreatePEspece.contains(e.target)
        && !inputCreatePNom.contains(e.target)
        && !buttonGoCreateP.contains(e.target)

        && !buttonNumber.contains(e.target)
        && !inputNumberL.contains(e.target)
        && !buttonGoNumber.contains(e.target)

        && !buttonDelete .contains(e.target)
        && !inputNumberD.contains(e.target)
        && !buttonGoDelete.contains(e.target)
        ) 
        {
        hideAll();
    }
});

hideAll();