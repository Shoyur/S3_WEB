--
-- Database: ma941bdfilms
--
CREATE DATABASE IF NOT EXISTS ma941bdfilms DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE ma941bdfilms;

-- --------------------------------------------------------

--
-- Table structure for table films
--

DROP TABLE IF EXISTS films;
CREATE TABLE films (
  idf int(11) PRIMARY KEY AUTO_INCREMENT,
  titre varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  duree int(11) NOT NULL,
  realisateur varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  pochette varchar(256) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
