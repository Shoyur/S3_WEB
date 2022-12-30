export class Usager {

    apikey: string;
    nom: string;
    prenom: string;
    courriel: string;
    motdepasse: string;
  
    constructor(apikey: string, nom: string, prenom: string, courriel: string, motdepasse: string) {
      this.apikey = apikey;
      this.nom = nom;
      this.prenom = prenom;
      this.courriel = courriel;
      this.motdepasse = motdepasse;
    }
    
  }