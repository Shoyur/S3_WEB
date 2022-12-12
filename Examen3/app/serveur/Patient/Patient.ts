export class Patient {
  private idp: number = 0;
  private nom: string = "";
  private prenom: string = "";
  private daten: string = "";
  private sexe: string = "";
  private adresse: string = "";
  private cp: string = "";
  private fumeur: boolean = false;

  constructor(idp: number, nom: string, prenom: string, daten: string, sexe: string, adresse: string, cp: string, fumeur: boolean) {
    this.setIdp(idp);
    this.setNom(nom);
    this.setPrenom(prenom);
    this.setDaten(daten);
    this.setSexe(sexe);
    this.setAdresse(adresse);
    this.setCp(cp);
    this.setFumeur(fumeur);
  }

  public getIdp(): number{
    return this.idp;
  }
  public setIdp(idp: number): void {
    this.idp = idp;
  }
  public getNom(): string {
    return this.nom;
  }
  public setNom(nom: string): void {
    this.nom = nom;
  }
  public getPrenom(): string {
    return this.prenom;
  }
  public setPrenom(prenom: string): void {
    this.prenom = prenom;
  }
  public getDaten(): string {
    return this.daten;
  }
  public setDaten(daten: string): void {
    this.daten = daten;
  }
  public getSexe(): string {
    return this.sexe;
  }
  public setSexe(sexe: string): void {
    this.sexe = sexe;
  }
  public getAdresse(): string {
    return this.adresse;
  }
  public setAdresse(adresse: string): void {
    this.adresse = adresse;
  }
  public getCp(): string {
    return this.cp;
  }
  public setCp(cp: string): void {
    this.cp = cp;
  }
  public getFumeur(): boolean {
    return this.fumeur;
  }
  public setFumeur(fumeur: boolean): void {
    this.fumeur = fumeur;
  }
}
