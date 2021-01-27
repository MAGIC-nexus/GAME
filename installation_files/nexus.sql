-- --------------------------------------------------------
-- Host:                         95.110.171.18
-- Versione server:              5.5.28-log - MySQL Community Server (GPL)
-- S.O. server:                  Win64
-- HeidiSQL Versione:            11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dump della struttura del database dbinstance_2885_1
CREATE DATABASE IF NOT EXISTS `dbinstance_2885_1` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `dbinstance_2885_1`;

-- Dump della struttura di tabella dbinstance_2885_1.backup_stream
CREATE TABLE IF NOT EXISTS `backup_stream` (
  `Id_Bk` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Id_Room_bk` varchar(20) DEFAULT NULL,
  `Id_Player_bk` varchar(20) DEFAULT NULL,
  `Region_Name_bk` varchar(50) DEFAULT NULL,
  `Bk_Json_Stream` varchar(8000) DEFAULT NULL,
  `IdR_bk` int(11) DEFAULT NULL,
  KEY `Indice 2` (`Id_Bk`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.eu_stream
CREATE TABLE IF NOT EXISTS `eu_stream` (
  `Id_Eu` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Id_Room` varchar(20) DEFAULT NULL,
  `Id_Player` varchar(20) DEFAULT NULL,
  `Region_Name` varchar(50) DEFAULT NULL,
  `EU_Json_Stream` varchar(8000) DEFAULT NULL,
  `IdR` int(11) unsigned DEFAULT NULL,
  KEY `Indice 2` (`Id_Eu`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.facilitator
CREATE TABLE IF NOT EXISTS `facilitator` (
  `Nome` varchar(100) DEFAULT NULL,
  `Cognome` varchar(100) DEFAULT NULL,
  `User` varchar(100) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Country` text,
  `Org` text,
  `Dal` date DEFAULT NULL,
  `Al` date DEFAULT NULL,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.fac_pending
CREATE TABLE IF NOT EXISTS `fac_pending` (
  `Nome` varchar(100) DEFAULT NULL,
  `Cognome` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Org` text,
  `Country` text,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.f_acces
CREATE TABLE IF NOT EXISTS `f_acces` (
  `Username` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.manuale
CREATE TABLE IF NOT EXISTS `manuale` (
  `Nome` text,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.player
CREATE TABLE IF NOT EXISTS `player` (
  `Nome` varchar(150) DEFAULT NULL,
  `Domanda` varchar(150) DEFAULT NULL,
  `Risposta` varchar(150) DEFAULT NULL,
  `Tipo` text,
  `Region` varchar(50) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.prooms
CREATE TABLE IF NOT EXISTS `prooms` (
  `IdP` int(11) DEFAULT NULL,
  `IdS` int(11) DEFAULT NULL,
  `Region` varchar(50) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.request
CREATE TABLE IF NOT EXISTS `request` (
  `IdP` int(11) DEFAULT NULL,
  `From` varchar(50) DEFAULT NULL,
  `To` varchar(50) DEFAULT NULL,
  `Tipo` varchar(50) DEFAULT NULL,
  `Valore` varchar(50) DEFAULT NULL,
  `Status` varchar(150) DEFAULT NULL,
  `Region` varchar(150) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL,
  `Reale` varchar(150) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.stanze
CREATE TABLE IF NOT EXISTS `stanze` (
  `Nome` text,
  `Data` date DEFAULT NULL,
  `Ids` varchar(50) DEFAULT NULL,
  `Idf` int(11) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

-- Dump della struttura di tabella dbinstance_2885_1.wt
CREATE TABLE IF NOT EXISTS `wt` (
  `ids` int(11) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- L’esportazione dei dati non era selezionata.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
