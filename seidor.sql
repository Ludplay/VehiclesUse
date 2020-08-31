# MySQL-Front 5.1  (Build 4.13)

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;


# Host: localhost    Database: seidor
# ------------------------------------------------------
# Server version 5.5.39

#
# Source for table drivers
#

DROP TABLE IF EXISTS `drivers`;
CREATE TABLE `drivers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#
# Dumping data for table drivers
#

INSERT INTO `drivers` VALUES (2,'Jonas Albuquerque','2020-08-30 22:11:54','2020-08-30 22:15:54');
INSERT INTO `drivers` VALUES (3,'Jonas','2020-08-30 22:15:10',NULL);

#
# Source for table drivers_vehicles
#

DROP TABLE IF EXISTS `drivers_vehicles`;
CREATE TABLE `drivers_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `driver_id` int(11) NOT NULL DEFAULT '0',
  `vehicle_id` int(11) NOT NULL DEFAULT '0',
  `start_at` date NOT NULL DEFAULT '0000-00-00',
  `end_at` date DEFAULT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `driver_id` (`driver_id`),
  KEY `vehicle_id` (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#
# Dumping data for table drivers_vehicles
#

INSERT INTO `drivers_vehicles` VALUES (1,2,3,'2020-09-01','2020-09-13','Viagem','2020-08-30 22:39:35',NULL);
INSERT INTO `drivers_vehicles` VALUES (2,2,3,'2020-10-10','2020-11-12','Viagem','2020-08-30 23:04:34','2020-08-30 23:08:03');
INSERT INTO `drivers_vehicles` VALUES (3,3,4,'2020-11-10','2020-11-12','Viagem','2020-08-30 23:06:10','2020-08-30 23:08:49');
INSERT INTO `drivers_vehicles` VALUES (4,3,4,'2020-11-15',NULL,'Viagem','2020-08-30 23:08:53',NULL);

#
# Source for table vehicles
#

DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `license_plate` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `color` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `brand` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#
# Dumping data for table vehicles
#

INSERT INTO `vehicles` VALUES (1,'opk-1245','brown','Chevrolet','2020-08-30 19:34:11',NULL);
INSERT INTO `vehicles` VALUES (2,'apk-2022','black','Porsche','2020-08-30 19:39:06','2020-08-30 20:35:20');
INSERT INTO `vehicles` VALUES (3,'hst-1478','yellow','Fiat','2020-08-30 19:40:29',NULL);
INSERT INTO `vehicles` VALUES (4,'hst-1478','red','Fiat','2020-08-30 19:40:54',NULL);
INSERT INTO `vehicles` VALUES (5,'hst-1478','red','Fiat','2020-08-30 19:45:51',NULL);
INSERT INTO `vehicles` VALUES (6,'hst-1478','red','Fiat','2020-08-30 19:47:26',NULL);
INSERT INTO `vehicles` VALUES (7,'hst-1478','red','Fiat','2020-08-30 19:51:30',NULL);
INSERT INTO `vehicles` VALUES (9,'hst-1478','red','Fiat','2020-08-30 19:51:36',NULL);

#
#  Foreign keys for table drivers_vehicles
#

ALTER TABLE `drivers_vehicles`
ADD CONSTRAINT `drivers_vehicles_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`) ON UPDATE CASCADE,
ADD CONSTRAINT `drivers_vehicles_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON UPDATE CASCADE;


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
