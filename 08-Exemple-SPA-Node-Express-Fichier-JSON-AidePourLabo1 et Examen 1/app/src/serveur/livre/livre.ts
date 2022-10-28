export class Livre {
  IdLivre: number;
  Titre: string;
  IdAuteur: number;
  Annee: number;
  Pages: number;
  Categorie: string;

  constructor(
    IdLivre: number,
    Titre: string,
    IdAuteur: number,
    Annee: number,
    Pages: number,
    Categorie: string
  ) {
    this.IdLivre = IdLivre;
    this.Titre = Titre;
    this.IdAuteur = IdAuteur;
    this.Annee = Annee;
    this.Pages = Pages;
    this.Categorie = Categorie;
  }
}
