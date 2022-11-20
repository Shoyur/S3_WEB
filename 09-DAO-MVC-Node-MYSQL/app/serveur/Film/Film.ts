export class Film {
  private idf: number=0;
  private titre: string="";
  private duree: number=0;
  private realisateur: string="";
  private pochette: string="";

  constructor(idf: number, titre: string, duree: number, realisateur: string, pochette: string) {
    this.setIdf(idf);
    this.setTitre(titre);
    this.setDuree(duree);
    this.setRealisateur(realisateur);
    this.setPochette(pochette);
  }

  public getIdf(): number{
    return this.idf;
  }
  public setIdf(idf: number): void {
    this.idf = idf;
  }
  public getTitre(): string {
    return this.titre;
  }
  public setTitre(titre: string): void {
    this.titre = titre;
  }
  public getDuree(): number {
    return this.duree;
  }
  public setDuree(duree: number): void {
    this.duree = duree;
  }
  public getRealisateur(): string {
    return this.realisateur;
  }
  public setRealisateur(realisateur: string): void {
    this.realisateur = realisateur;
  }

  public getPochette(): string {
    return this.pochette;
  }

  public setPochette(pochette: string): void {
    this.pochette = pochette;
  }
}
