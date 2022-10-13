import path from "path";

export const obtenirFichier = async (fichier: string): Promise<string> => {
    return path.join(__dirname, "../donnees/", fichier);
};
