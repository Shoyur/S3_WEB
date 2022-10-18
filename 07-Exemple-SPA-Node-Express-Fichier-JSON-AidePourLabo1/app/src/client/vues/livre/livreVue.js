const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Num</th>
                <th scope="col">Titre</th>
                <th scope="col">Auteur</th>
                <th scope="col">Annee</th>
                <th scope="col">Pages</th>
                <th scope="col">Catégorie</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (unLivre) =>{
    let tr=`<tr>
        <th>${unLivre.IdLivre}</th>
        <td>${unLivre.Titre}</td>
        <td>${unLivre.IdAuteur}</td>
        <td>${unLivre.Annee}</td>
        <td>${unLivre.Pages}</td>
        <td>${unLivre.Categorie}</td>
    </tr>`;
    return tr;
}

const lister = () => {
    let resultat = construireEntetes();
    for(let unLivre of listeLivres){
        resultat += construireTR(unLivre);
    }
    resultat += "</tbody></table>";
    document.getElementsByClassName('container')[0].innerHTML = resultat;
}

const listerLivresAuteur = (listeLivresDeAuteur) => {
    let resultat = construireEntetes();
    for(let unLivre of listeLivresDeAuteur){
        resultat += construireTR(unLivre);
    }
    resultat += "</tbody></table>";
    document.getElementsByClassName('container')[0].innerHTML = resultat;
}

let formAuteur = () => {
    let rep = `
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="annee" class="form-label">Année</label>
            <input type="text" class="form-control" id="numa" name="numa" value="" required>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="button" onClick="listerParAuteur();">Envoyer</button>
        </div>
    </form>
`;
 document.getElementsByClassName('container')[0].innerHTML = rep;
}