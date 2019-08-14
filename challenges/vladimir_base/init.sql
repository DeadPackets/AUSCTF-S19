# ************************************************************
# Sequel Pro SQL dump
# Version 5438
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.15)
# Database: cr4ck3rs_forum
# Generation Time: 2019-04-20 10:57:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` text COLLATE utf8mb4_general_ci,
  `body` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `title`, `body`)
VALUES
	(1,'Hellloooo?','Why doesnt anybody post here?'),
	(2,'testing','testing testing 123'),
	(3,'vladimir is the best','i really am'),
	(5,'best hacker ever','im the best'),
	(6,'SQL Injection Tutorial','lmao n00b go find google it yourself and use SQLMap'),
	(7,'Admin please update this site','I\'ve seen kids write better code than this, your entire database can be dumped *smh*'),
	(8,'VLADIMIR CHANGE YOUR SSH PASSOWRD','WHY THE HECK DO YOU HAVE IT AS THE SAME PASSWORD TO THIS FORUM YOU DIPSTICK');

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table security_questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `security_questions`;

CREATE TABLE `security_questions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` text COLLATE utf8mb4_general_ci,
  `question` text COLLATE utf8mb4_general_ci,
  `answer` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `security_questions` WRITE;
/*!40000 ALTER TABLE `security_questions` DISABLE KEYS */;

INSERT INTO `security_questions` (`id`, `username`, `question`, `answer`)
VALUES
	(1,'vladimir','What is the name of your favorite pet?','anastasia'),
	(2,'the_butcher','Meat?','meat'),
	(3,'trinity','What is the meaning to life?','42');

/*!40000 ALTER TABLE `security_questions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` text COLLATE utf8mb4_general_ci,
  `password` text COLLATE utf8mb4_general_ci,
  `role` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `username`, `password`, `role`)
VALUES
	(2,'vladimir','f9527a5879a99d9caa70f57e17bf3568','admin'),
	(3,'the_butcher','9e1079bddc3d5d35f5960c60da29f429','user'),
	(4,'trinity','421dc56bf505833e8cd51fafaad53388','user'),
	(5,'flag_here','FLAG{Injection4Dayz}','flag');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
