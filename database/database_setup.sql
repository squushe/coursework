-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: cinemabooking
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Тімоті Шаламе','https://media.themoviedb.org/t/p/w600_and_h900_face/dFxpwRpmzpVfP1zjluH68DeQhyj.jpg'),(2,'Зендея','https://media.themoviedb.org/t/p/w276_and_h350_face/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg'),(3,'Ребекка Фергюсон','https://media.themoviedb.org/t/p/w276_and_h350_face/lJloTOheuQSirSLXNA3JHsrMNfH.jpg'),(4,'Остін Батлер','https://media.themoviedb.org/t/p/w276_and_h350_face/atdAs4pFGjUQ4m2W8kJYly7N6cC.jpg'),(5,'Флоренс П’ю','https://media.themoviedb.org/t/p/w276_and_h350_face/6EpDNiVqB2Mao3mHm4kYw09ufHk.jpg'),(6,'Меттью Макконехі','https://media.themoviedb.org/t/p/w276_and_h350_face/lCySuYjhXix3FzQdS4oceDDrXKI.jpg'),(7,'Енн Гетевей','https://media.themoviedb.org/t/p/w276_and_h350_face/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg'),(8,'Джессіка Честейн','https://media.themoviedb.org/t/p/w276_and_h350_face/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg'),(9,'Майкл Кейн','https://media.themoviedb.org/t/p/w276_and_h350_face/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg'),(10,'Метт Деймон','https://media.themoviedb.org/t/p/w132_and_h132_face/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg'),(11,'Тім Роббінс','https://media.themoviedb.org/t/p/w132_and_h132_face/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg'),(12,'Морган Фрімен','https://media.themoviedb.org/t/p/w276_and_h350_face/jPsLqiYGSofU4s6BjrxnefMfabb.jpg'),(13,'Боб Гантон','https://media.themoviedb.org/t/p/w276_and_h350_face/ulbVvuBToBN3aCGcV028hwO0MOP.jpg'),(14,'Вільям Седлер','https://media.themoviedb.org/t/p/w276_and_h350_face/xC9sijoDnjS3oDZ5eszcGKHKAOp.jpg'),(15,'Кленсі Браун','https://media.themoviedb.org/t/p/w276_and_h350_face/1JeBRNG7VS7r64V9lOvej9bZXW5.jpg'),(16,'Кілліан Мерфі','https://media.themoviedb.org/t/p/w276_and_h350_face/llkbyWKwpfowZ6C8peBjIV9jj99.jpg'),(17,'Емілі Блант','https://media.themoviedb.org/t/p/w276_and_h350_face/5nCSG5TL1bP1geD8aaBfaLnLLCD.jpg'),(18,'Роберт Дауні мол.','https://media.themoviedb.org/t/p/w276_and_h350_face/5A7vGrVJcOLdfow1i9GoXN85Q16.jpg'),(19,'Метт Деймон','https://media.themoviedb.org/t/p/w276_and_h350_face/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg'),(20,'Джош Гартнетт','https://media.themoviedb.org/t/p/w276_and_h350_face/dCfu2EN7FjISACcjilaJu7evwEc.jpg'),(21,'Наталка Денисенко','https://media.themoviedb.org/t/p/w276_and_h350_face/1YwB560OyNerNFkac9uUPy9XwYM.jpg'),(22,'Артем Пивоваров','https://media.themoviedb.org/t/p/w276_and_h350_face/sSRRRzGwR4LV6PKOn8leGXjk3CA.jpg'),(23,'Юлія Саніна','https://media.themoviedb.org/t/p/w276_and_h350_face/rOhBJuloIOhoORONKm20Tx1tfAs.jpg'),(24,'Сергій Притула','https://media.themoviedb.org/t/p/w276_and_h350_face/oOT672i6Y28EvvunHoWeeOIB8xS.jpg'),(25,'Олена Кравець','https://media.themoviedb.org/t/p/w276_and_h350_face/z3YPcVr3shmS0GWllcOuw2E8qCq.jpg'),(26,'Крістіан Бейл','https://media.themoviedb.org/t/p/w276_and_h350_face/7Pxez9J8fuPd2Mn9kex13YALrCQ.jpg'),(27,'Гіт Леджер','https://media.themoviedb.org/t/p/w276_and_h350_face/p2z2bURSg7nuMsN9P2s61e2RvNz.jpg'),(28,'Аарон Екхарт','https://media.themoviedb.org/t/p/w276_and_h350_face/u5JjnRMr9zKEVvOP7k3F6gdcwT6.jpg'),(29,'Майкл Кейн','https://media.themoviedb.org/t/p/w276_and_h350_face/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg'),(30,'Ґері Олдмен','https://media.themoviedb.org/t/p/w276_and_h350_face/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'),(31,'Елайджа Вуд','https://media.themoviedb.org/t/p/w276_and_h350_face/7UKRbJBNG7mxBl2QQc5XsAh6F8B.jpg'),(32,'Ієн Маккеллен','https://media.themoviedb.org/t/p/w276_and_h350_face/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg'),(33,'Вігго Мортенсен','https://media.themoviedb.org/t/p/w276_and_h350_face/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg'),(34,'Шон Астін','https://media.themoviedb.org/t/p/w276_and_h350_face/ywH1VvdwqlcnuwUVr0pV0HUZJQA.jpg'),(35,'Орландо Блум','https://media.themoviedb.org/t/p/w132_and_h132_face/pulwUR0lZ8IWwXUCRXCnyWfYvNL.jpg'),(36,'Джон Траволта','https://media.themoviedb.org/t/p/w276_and_h350_face/zyDLuyohFiON7QliYyP8hnxu2eX.jpg'),(37,'Семюел Л. Джексон','https://media.themoviedb.org/t/p/w276_and_h350_face/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg'),(38,'Ума Турман','https://media.themoviedb.org/t/p/w276_and_h350_face/sBgAZWi3o4FsnaTvnTNtK6jpQcF.jpg'),(39,'Брюс Вілліс','https://media.themoviedb.org/t/p/w276_and_h350_face/2jbMZCksnFlEdCZhEvh6GmU4GQl.jpg'),(40,'Вінг Реймс','https://media.themoviedb.org/t/p/w276_and_h350_face/4gpLVNKPZlVucc4fT2fSZ7DksTK.jpg'),(41,'Том Генкс','https://media.themoviedb.org/t/p/w276_and_h350_face/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg'),(42,'Робін Райт','https://media.themoviedb.org/t/p/w276_and_h350_face/d3rIv0y2p0jMsQ7ViR7O1606NZa.jpg'),(43,'Гері Сініз','https://media.themoviedb.org/t/p/w276_and_h350_face/olRjiV8ZhBixQiTvrGwXhpVXxsV.jpg'),(44,'Майкелті Вільямсон','https://media.themoviedb.org/t/p/w276_and_h350_face/dR16zD9AjnHWbeN5OVmJWE0vSax.jpg'),(45,'Саллі Філд','https://media.themoviedb.org/t/p/w276_and_h350_face/5fBK36MdmdwQQMuP0W70rXADXih.jpg');
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_actors`
--

DROP TABLE IF EXISTS `movie_actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_actors` (
  `movie_id` int unsigned NOT NULL,
  `actor_id` int unsigned NOT NULL,
  PRIMARY KEY (`movie_id`,`actor_id`),
  KEY `fk_movie_actors_actor` (`actor_id`),
  CONSTRAINT `fk_movie_actors_actor` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_movie_actors_movie` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_actors`
--

LOCK TABLES `movie_actors` WRITE;
/*!40000 ALTER TABLE `movie_actors` DISABLE KEYS */;
INSERT INTO `movie_actors` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,6),(2,7),(2,8),(2,9),(2,10),(3,11),(3,12),(3,13),(3,14),(3,15),(4,16),(4,17),(4,18),(4,19),(4,20),(5,21),(5,22),(5,23),(5,24),(5,25),(6,26),(6,27),(6,28),(6,29),(6,30),(7,31),(7,32),(7,33),(7,34),(7,35),(8,36),(8,37),(8,38),(8,39),(8,40),(9,41),(9,42),(9,43),(9,44),(9,45);
/*!40000 ALTER TABLE `movie_actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` mediumtext,
  `poster_url` varchar(255) DEFAULT NULL,
  `duration_minutes` int unsigned NOT NULL,
  `genre` varchar(100) NOT NULL,
  `release_date` datetime NOT NULL,
  `trailer_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Дюна: Частина друга','Пол Атрід об\'єднується з фременами, щоб звільнити планету Арракіс від дому Харконненів та запобігти жахливій війні.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',166,'Фантастика, Бойовик, Драма','2024-02-29 00:00:00','Way9Dexny3w'),(2,'Інтерстеллар','Група дослідників вирушає у подорож крізь червоточину в космосі, щоб знайти нову планету для людства.','https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',169,'Наукова фантастика, Драма','2014-11-06 00:00:00','zSWdZVtXT7E'),(3,'Втеча з Шоушенка','Історія банкіра Енді Дюфрейна, несправедливо засудженого до довічного ув\'язнення, та його виживання у в\'язниці Шоушенк.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',142,'Драма','1994-09-23 00:00:00','PLl99DlL6b4'),(4,'Оппенгеймер','Біографічна драма про \"батька атомної бомби\" Роберта Оппенгеймера та його роль у Мангеттенському проекті.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',180,'Біографія, Драма, Історія','2023-07-21 00:00:00','uYPbbksJxIg'),(5,'Мавка. Лісова пісня','Чарівна історія про Мавку — душу Лісу, яка закохується у звичайного сільського хлопця Лукаша.','https://www.themoviedb.org/t/p/w1280/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg',99,'Анімація, Фентезі, Сімейний','2023-03-02 00:00:00','GXaMT5pX12w'),(6,'Темний лицар','Коли в Ґотемі з\'являється новий геній злочинності, відомий як Джокер, Бетмен мусить пройти одне з найбільших психологічних та фізичних випробувань.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',152,'Бойовик, Кримінал, Драма','2008-07-18 00:00:00','EXeTwQWrcwY'),(7,'Володар перснів: Повернення короля','Фінальна битва за Середзем\'я. Фродо та Сем наближаються до Рокової гори, щоб знищити Перстень, тоді як Арагорн веде армії людей проти Саурона.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',201,'Фентезі, Пригоди, Бойовик','2003-12-17 00:00:00','r5X-hFf6Bwo'),(8,'Кримінальне чтиво','Кілька історій з життя бандитів, боксера та дружини гангстера переплітаються у Лос-Анджелесі в нелінійному сюжеті.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',154,'Кримінал, Драма','1994-10-14 00:00:00','s7EdQ4FqbhY'),(9,'Форрест Гамп','Історія життя Форреста Гампа, чоловіка з низьким IQ, але добрим серцем, який мимоволі стає учасником багатьох історичних подій США.','https://image.tmdb.org/t/p/w600_and_h900_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',142,'Драма, Романтика','1994-07-06 00:00:00','bLvqoHBptjg');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `movie_id` int unsigned NOT NULL,
  `hall_name` varchar(100) NOT NULL,
  `start_time` datetime NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sessions_movie` (`movie_id`),
  CONSTRAINT `fk_sessions_movie` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES (1,1,'Зал 1','2025-12-05 10:00:00',150.00),(2,1,'Зал 1','2025-12-05 14:30:00',180.00),(3,1,'Зал 1','2025-12-05 19:00:00',200.00),(4,2,'Зал 1','2025-12-06 11:00:00',140.00),(5,2,'Зал 1','2025-12-06 15:00:00',160.00),(6,2,'Зал 1','2025-12-06 19:30:00',180.00),(7,3,'Зал 1','2025-12-07 13:00:00',130.00),(8,3,'Зал 1','2025-12-07 18:00:00',150.00),(9,4,'Зал 1','2025-12-05 16:00:00',170.00),(10,4,'Зал 1','2025-12-05 20:00:00',190.00),(11,4,'Зал 1','2025-12-06 20:00:00',220.00),(12,5,'Зал 1','2025-12-06 10:00:00',100.00),(13,5,'Зал 1','2025-12-06 12:30:00',120.00),(14,5,'Зал 1','2025-12-07 11:00:00',120.00),(15,6,'Зал 1','2025-12-07 15:30:00',160.00),(16,6,'Зал 1','2025-12-07 21:00:00',180.00),(17,7,'Зал 1','2025-12-08 12:00:00',140.00),(18,7,'Зал 1','2025-12-08 17:00:00',160.00),(19,8,'Зал 1','2025-12-08 19:30:00',150.00),(20,8,'Зал 1','2025-12-08 22:00:00',170.00),(21,9,'Зал 1','2025-12-09 16:00:00',130.00),(22,9,'Зал 1','2025-12-09 19:00:00',150.00);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `session_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `row_number` int unsigned NOT NULL,
  `seat_number` int unsigned NOT NULL,
  `status` enum('booked','paid','cancelled') NOT NULL DEFAULT 'paid',
  `booking_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_seat_for_session_idx` (`session_id`,`row_number`,`seat_number`),
  KEY `fk_tickets_user` (`user_id`),
  CONSTRAINT `fk_tickets_session` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tickets_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,1,1,8,5,'paid','2025-11-28 18:50:46'),(2,1,1,8,8,'paid','2025-11-28 18:50:46'),(3,1,2,7,6,'paid','2025-11-29 17:45:22');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'maks@gmail.com','123456789','Maks','2025-11-02 14:18:15'),(2,'adrii@gmail.com','qwerty','Andii','2025-11-29 17:32:41');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cinemabooking'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-16 12:36:53
