const listerPlaylist = (arg) => {

    let spec = {};
    spec['tous'] = function() { spec = { key: "tous" }; };
    spec['createur'] = function() { spec = { key: arg, value: document.getElementById('inputCreateur').value }; };
    spec['tracks'] = function() { spec = { key: arg, value: document.getElementById('inputTracks').value }; };
    spec[arg]();

    $.ajax({
        url: '/playlist',
        type: "POST",
        data: spec,
        dataType: 'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listePlaylist) => {
            let combien = 0;
            if (listePlaylist == null) { return; }
            let texteListe = "";
            let texteListeTemp = "";
            for (let unPlaylist of listePlaylist) { 
                texteListeTemp += construireTR(unPlaylist);
                combien++;
            }
            texteListe += construireEntetes();
            texteListe += "Il y a <b>" + combien + "</b> résultats :<br><br>";
            texteListe += "Vous pouvez cliquer une petite image pour afficher une plus grande dans une nouvelle fenêtre.<br><br>";
            texteListe += texteListeTemp;
            texteListe += "</tbody></table>";
            document.getElementsByClassName('container')[0].innerHTML = texteListe;
            document.getElementById('contenu-d').style.display = 'block';
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source playlist n'a pu être chargé.\nRaison:\n${e.message}`); }
    });
}

const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Code</th>
                <th scope="col">Titre</th>
                <th scope="col">Durée</th>
                <th scope="col">Pistes</th>
                <th scope="col">Créateur</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (unPlaylist) =>{
    let tr=`<tr>
        <th scope="row">
            <a href=${unPlaylist.picture_xl} target="_blank">
            <img class="" src=${unPlaylist.picture_small}>
            </a>
        </th>
        <td>${unPlaylist.id}</td>
        <td>${unPlaylist.title}</td>
        <td>${unPlaylist.duration}</td>
        <td>${unPlaylist.nb_tracks}</td>
        <td>${unPlaylist.creator.name}</td>
    </tr>`;
    return tr;
}


const afficherFans = () => {

    $.ajax({
        url: '/afficherFans',
        type: "GET",
        dataType: 'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (combien) => {
            document.getElementById("texteFans").innerHTML = "Nombre total de fans de la playlist = " + combien;
            document.getElementById('texteFans').style.display = 'block';
            document.getElementById('contenu-d').style.display = 'none';
        },
        fail: (e) => { alert(`Erreur!\nLe fichier source playlist n'a pu être chargé.\nRaison:\n${e.message}`); }
    });
}


const buttonCreateurClick = () => {
    hideAll();
    document.getElementById('inputCreateur').style.display = 'block';
    document.getElementById('buttonGoCreateur').style.display = 'block';
}

const buttonTracksClick = () => {
    hideAll();
    document.getElementById('inputTracks').style.display = 'block';
    document.getElementById('buttonGoTracks').style.display = 'block';
}

const hideAll = () => {
    document.getElementById('inputCreateur').style.display = 'none';
    document.getElementById('inputCreateur').value = '';
    document.getElementById('buttonGoCreateur').style.display = 'none';
    document.getElementById('inputTracks').style.display = 'none';
    document.getElementById('inputTracks').value = '';
    document.getElementById('buttonGoTracks').style.display = 'none';

    document.getElementById('texteFans').style.display = 'none';
}

const buttonCreateur = document.getElementById('buttonCreateur');
const buttonTracks = document.getElementById('buttonTracks');

const inputCreateur = document.getElementById('inputCreateur');
const buttonGoCreateur = document.getElementById('buttonGoCreateur');
const inputTracks = document.getElementById('inputTracks');
const buttonGoTracks = document.getElementById('buttonGoTracks');

inputCreateur.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerPlaylist('createur'); } 
});
inputTracks.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter') { listerPlaylist('tracks'); } 
});

document.addEventListener('click', function(e) {
    if (!inputCreateur.contains(e.target)
        && !buttonGoCreateur.contains(e.target)
        && !inputTracks.contains(e.target)
        && !buttonGoTracks.contains(e.target)

        && !buttonCreateur.contains(e.target)
        && !buttonTracks.contains(e.target)
        ) 
        {
        hideAll();
    }
});


  