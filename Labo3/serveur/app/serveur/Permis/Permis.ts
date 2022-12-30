export class Permis {

  private idp: number = 0;
  private debut: Date = new Date;
  private fin: Date = new Date;
  private ville: string = "";
  private espece: string = "";
  private nom: string = "";

  constructor(idp: number, debut: Date, fin: Date, ville: string, espece: string, nom: string) {
    this.setIdp(idp);
    this.setDebut(debut);
    this.setFin(fin);
    this.setVille(ville);
    this.setEspece(espece);
    this.setNom(nom);
  }

  public getIdp(): number{
    return this.idp;
  }
  public setIdp(idp: number): void {
    this.idp = idp;
  }
  public getDebut(): Date {
    return this.debut;
  }
  public setDebut(debut: Date): void {
    this.debut = debut;
  }
  public getFin(): Date {
    return this.fin;
  }
  public setFin(fin: Date): void {
    this.fin = fin;
  }
  public getville(): string {
    return this.ville;
  }
  public setVille(ville: string): void {
    this.ville = ville;
  }
  public getEspece(): string {
    return this.espece;
  }
  public setEspece(espece: string): void {
    this.espece = espece;
  }
  public getNom(): string {
    return this.nom;
  }
  public setNom(nom: string): void {
    this.nom = nom;
  }
  
}
