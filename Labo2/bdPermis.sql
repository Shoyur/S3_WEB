-- Database: bdPermisAnimaux

CREATE DATABASE IF NOT EXISTS bdPermisAnimaux DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE bdPermisAnimaux;



-- Structure de la table permis

DROP TABLE IF EXISTS permis;
CREATE TABLE permis (
    idp int(10) PRIMARY KEY NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    gardien_territoires VARCHAR(30) COLLATE utf8_unicode_ci NOT NULL,
    type_permis VARCHAR(15) COLLATE utf8_unicode_ci NOT NULL,
    nom_animal VARCHAR(30) COLLATE utf8_unicode_ci NOT NULL,
    categorie_race_chiens VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    race_chiens VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    race_croise_cheins VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    sexe VARCHAR(10) COLLATE utf8_unicode_ci NOT NULL,
    couleur VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    date_naissance DATE NOT NULL,
    vaccin INT(2) NOT NULL,
    sterelisation INT(2) NOT NULL,
    poids FLOAT(3,2) NOT NULL,
    micropuce INT(2) NOT NULL,
    potentiel_dangeureux INT(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE= utf8_unicode_ci;