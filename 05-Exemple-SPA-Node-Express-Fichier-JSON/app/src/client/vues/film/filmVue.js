const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Titre</th>
                <th scope="col">Année</th>
                <th scope="col">Réalisateur</th>
                <th scope="col">Catégories</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (unFilm) =>{
    let tr=`<tr>
        <th scope="row">${unFilm.Title}</th>
        <td>${unFilm.Year}</td>
        <td>${unFilm.Director}</td>
        <td>${unFilm.Genre}</td>
    </tr>`;
    return tr;
}

const lister = () => {
    if(listeFilms == null){
        document.getElementById('contenu').innerHTML = "<strong>Vous devez préalablement charger le fichier de données<br>films.json. Merci de votre collaboration.</strong>";
    }else{
        let resultat = construireEntetes();
        for(let unFilm of listeFilms){
            resultat += construireTR(unFilm);
        }
        resultat += "</tbody></table>";
        document.getElementById('contenu').innerHTML = resultat;
    }
}

const listerParAnnee = () => {
  const annee = document.getElementById('annee').value;
  if(listeFilms == null){
        document.getElementById('contenu').innerHTML = "<strong>Vous devez préalablement charger le fichier de données<br>films.json. Merci de votre collaboration.</strong>";
    }else{
        let resultat = construireEntetes();
        for(let unFilm of listeFilms){
            if (unFilm.Year.substring(0,4) === annee){
                resultat += construireTR(unFilm);
            }
        }
        resultat += "</tbody></table>";
        document.getElementById('contenu').innerHTML = resultat;
    }
}

let formAnnee = () => {
    let rep = `
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="annee" class="form-label">Année</label>
            <input type="text" class="form-control" id="annee" name="annee" value="" required>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="button" onClick="listerParAnnee();">Envoyer</button>
        </div>
    </form>
`;
 $('#contenu').html(rep);
}