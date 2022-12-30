export class Permis {

    Permis_Numero: number;
    Permis_Date_de_debut: string;
    Permis_Date_de_fin: string;
    Gardien_Territoire_ex_villes: string;
    Animal_Type_de_permis: string;
    Animal_Nom: string;
  
    constructor(Permis_Numero: number, Permis_Date_de_debut: string, Permis_Date_de_fin: string,
      Gardien_Territoire_ex_villes: string, Animal_Type_de_permis: string, Animal_Nom: string) {
      this.Permis_Numero = Permis_Numero;
      this.Permis_Date_de_debut = Permis_Date_de_debut;
      this.Permis_Date_de_fin = Permis_Date_de_fin;
      this.Gardien_Territoire_ex_villes = Gardien_Territoire_ex_villes;
      this.Animal_Type_de_permis = Animal_Type_de_permis;
      this.Animal_Nom = Animal_Nom;
    }
    
  }