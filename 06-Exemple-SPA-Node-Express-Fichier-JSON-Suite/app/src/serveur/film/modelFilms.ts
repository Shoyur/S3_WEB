import path from "path";

export const obtenirFichier = async (fichier: string): Promise<string> => {
    // console.log(__dirname);
    // console.log(path.join(__dirname, "../donnees/", fichier));
    return path.join(__dirname, "../donnees/", fichier);
};
