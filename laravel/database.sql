-- MySQL dump 10.13  Distrib 8.0.32, for macos13.0 (x86_64)
--
-- Host: localhost    Database: Bugtrag
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_ticket_id_foreign` (`ticket_id`),
  KEY `comments_user_id_foreign` (`user_id`),
  CONSTRAINT `comments_ticket_id_foreign` FOREIGN KEY (`ticket_id`) REFERENCES `user_tickets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,3,1,'Ut quas doloribus delectus deserunt voluptatem. Explicabo laudantium dolores cupiditate illum eius. Doloremque quisquam ut veniam expedita omnis. Qui id aperiam sunt a vero ad nam aperiam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(2,9,1,'Reprehenderit non eos perferendis. Et libero placeat exercitationem sed eum. Aut veniam eos rerum soluta est qui et eligendi.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(3,17,3,'Dolorem ab cum ea nostrum. Velit ex numquam dolor tenetur vel aliquid placeat. Sit quas voluptatibus voluptas at vitae.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(4,3,2,'Qui enim consequatur deserunt beatae. Nesciunt et a ea quia. Qui et tempore ut sunt sunt quae iste. Qui a fuga fuga accusantium voluptas voluptatem.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(5,13,2,'Illum sed voluptas id assumenda. Ad animi ab molestias architecto saepe illo facilis et. Facilis tempora voluptatem ullam accusamus asperiores autem nemo.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(6,3,1,'Quas voluptatem similique nostrum. Ut inventore quo ipsa iure. Nam voluptatem doloremque et praesentium commodi. Omnis quas quos tempora.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(7,9,5,'Aut quae maiores blanditiis illum sunt laboriosam qui. Quis dolor cumque nostrum natus non quis. Pariatur et reiciendis fuga reiciendis omnis numquam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(8,10,3,'Quas sed facere nam nesciunt perspiciatis nam facere. Velit et mollitia qui quia. Aut quia quia ea minus. Voluptas explicabo rerum iusto repellat iusto at quo ipsa.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(9,11,3,'Magni recusandae rerum eos minima fugiat. Quas voluptatum ducimus in deleniti velit. Porro tempore tempora rerum ad.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(10,19,1,'Nemo pariatur dolorum magnam ad. Architecto omnis distinctio voluptates ut esse quo. Officiis quod reprehenderit itaque consequatur blanditiis voluptatem.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(11,13,1,'Exercitationem rerum repellat doloremque aut occaecati. Vel et ut aut vitae neque.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(12,12,3,'Ad esse eum deleniti officiis ducimus. Quaerat rerum laboriosam qui sed omnis. Enim animi nobis autem sit sit saepe qui.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(13,9,5,'Aut quod sit id exercitationem repellat error. Corrupti quia sunt provident. Voluptatibus maiores ut aut accusantium.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(14,13,2,'Impedit ut odit voluptatum est cumque et nostrum. Libero odit labore repellat odit aperiam. Laudantium aut deserunt ut aperiam quae natus amet.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(15,3,2,'Quis minus ut praesentium et ipsam. Corporis velit eos non tenetur dolorem corrupti sed eligendi. Soluta atque facilis id aut ipsam nesciunt.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(16,13,2,'Rerum assumenda ea repellat ut officia corporis fugiat. Et facere est voluptates.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(17,14,4,'Nulla maxime in soluta assumenda fuga repellendus officia qui. Non deleniti doloremque atque. Adipisci aliquid doloribus quis maxime earum sint ab.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(18,2,5,'Ut qui eos voluptas unde. Animi porro aut numquam sit. Labore omnis libero dolores. Quas vel et labore ipsa autem omnis.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(19,13,1,'Nemo dolorem excepturi ut labore. Beatae asperiores cupiditate commodi veniam voluptas. Atque delectus voluptatem quia fugit est ipsa.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(20,16,1,'Expedita repellat dolorem est labore. Cum deserunt odit accusamus et facere.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(21,8,2,'Iusto cumque vitae ea odio accusamus labore aut. Quos saepe in molestiae ad et. Ut accusantium vel dolore repudiandae. Est aut porro non qui sunt culpa ut.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(22,8,3,'Est illum cumque repudiandae cupiditate. Nostrum voluptatem sapiente ut. Consequatur accusamus dolore non aut vel. Rem facere possimus asperiores.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(23,18,4,'Maiores sapiente iste assumenda quo et ut ut quia. Corporis debitis quaerat quo voluptatem consequuntur quia. Totam provident soluta et maxime nemo aut accusamus nam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(24,10,3,'Ut voluptatem voluptatem esse iste. Necessitatibus facilis iure asperiores harum consequuntur qui omnis enim. Architecto esse mollitia modi repudiandae error non quia maiores.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(25,1,1,'Ullam est incidunt voluptatem adipisci delectus qui quasi. Veniam corporis asperiores odio laborum et.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(26,6,1,'Modi quia est fugiat aut eum. At eaque provident ipsa nisi quis. Reiciendis autem cumque ea laborum nostrum quia quod. Eius minus sequi inventore. Fugit ipsum non dolores quia neque.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(27,6,5,'Tempora velit ut et minima. Rerum distinctio sunt iure explicabo. Quia occaecati exercitationem veniam autem. Est et aliquam voluptas qui voluptatem.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(28,2,5,'Recusandae consectetur ad et quia illum adipisci. In fugiat dicta accusantium maxime soluta nisi fuga. Consequatur saepe dolores et excepturi. Deserunt modi veritatis facilis est.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(29,6,3,'Quo tempore ratione facere iusto exercitationem atque dolores. Voluptatem ex voluptatum excepturi incidunt quis sapiente velit. Alias nihil nemo facilis corporis sunt. Aut possimus veniam et.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(30,8,1,'Officia perferendis sit doloribus beatae quidem. Sequi distinctio error sequi nisi sunt facilis aut. Porro sed mollitia quas sequi laborum corrupti.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(31,20,1,'Voluptatem aut reprehenderit mollitia. Temporibus nemo ut ipsum officia esse dolorum. Sit sit et exercitationem provident.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(32,18,4,'Modi aut laudantium quis exercitationem. Tenetur reprehenderit aut ipsa sint pariatur qui natus. Earum natus dicta voluptatem quia et tenetur.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(33,17,2,'Et qui sunt dolores ipsa nihil dolore voluptatem. Eum qui eos sapiente voluptatum harum repudiandae neque. Molestiae corrupti ducimus eius quo enim aspernatur.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(34,15,2,'Hic illo et impedit ut. Incidunt dolorem quisquam eos. Sunt consequatur temporibus dolor laboriosam minima aut.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(35,3,2,'Amet ut et vitae omnis earum velit et sint. Deleniti ipsum dolorum quia dicta fuga.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(36,3,2,'Provident nesciunt error aperiam quas quia et dicta. Odit qui et iste et et dolor. Velit vero doloremque non sequi voluptatibus delectus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(37,14,3,'Alias ut qui dignissimos quam. Est quasi assumenda eos quo. Laborum ducimus in rerum magnam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(38,5,5,'Velit commodi quo dolor sed animi possimus. Veritatis nobis sunt architecto minima assumenda culpa eos. Nihil laboriosam ea dolor.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(39,7,4,'Qui vero quia modi quisquam laudantium hic. Veniam quia minima qui non et. Omnis dolore id aliquid fugiat dicta itaque.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(40,18,1,'Pariatur vel ut voluptates. Repellendus voluptatibus dolores et et omnis et quis doloremque. Necessitatibus eos dolor cum voluptatem id.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(41,18,3,'Qui voluptas ut aut qui ut. Officia ducimus consequatur voluptatem et. Molestias veritatis in numquam quisquam a laborum dolor sint.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(42,11,4,'Accusamus dolores quisquam officia. Nesciunt aut voluptate quasi voluptas voluptatum. Neque voluptatibus voluptatem rem mollitia rerum ex. Quo ducimus quod autem id.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(43,16,1,'Harum quo enim velit dolorem dolor sed. Harum in eligendi velit consequatur deserunt ullam est. Cupiditate dolor asperiores eos sint consequuntur unde rerum officia. Vel labore cupiditate non quia.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(44,16,2,'Minus laudantium iure ab. Rerum molestiae tenetur ipsa exercitationem. Unde ad temporibus distinctio quia.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(45,5,2,'Fugit doloremque quam expedita in eveniet incidunt. Deleniti inventore dignissimos vitae perferendis eos quas asperiores. Dolorem minus illum modi reiciendis. Repellendus aut beatae iste vero unde.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(46,18,2,'Quae vel quam id reprehenderit neque voluptatibus rerum. Quis fugiat ex ipsum cupiditate dolore quia ullam. Consectetur ut et iste recusandae aliquid. Aut ea non illo debitis odio.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(47,4,2,'Impedit occaecati et quis nisi esse ab. Doloribus veniam aliquam ratione voluptate est et et consequuntur. Consequatur aut eaque voluptas excepturi. Sunt debitis aut aut dolorem error velit ad.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(48,6,4,'Sed dicta nesciunt veritatis laborum. Modi repudiandae iste ut dolorem nobis. Enim suscipit nesciunt voluptates tenetur ut illo facilis.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(49,18,4,'Recusandae deleniti magni et voluptatum est odit ipsam. Non enim ut sunt deleniti. In rerum aut quae vel perspiciatis et ex.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(50,7,3,'Nam iste fugiat voluptatum at necessitatibus eveniet eos. Magni ipsa et consequatur at odio. Et numquam officia vero iusto.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(51,2,2,'Voluptates excepturi aut facilis eaque. Ut mollitia repellendus esse quis. Quos rem quos qui dolore. Saepe voluptas vel consequatur in voluptas qui dolores ut.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(52,18,3,'Eos non blanditiis in. Odio voluptates ex eius enim natus et id asperiores.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(53,17,5,'Odio expedita est explicabo libero ad. Hic consectetur vel quia perspiciatis perferendis et quisquam. Possimus ut aut facilis.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(54,14,4,'Illum debitis veritatis aut illum accusantium qui dolor. Ipsum dolor omnis voluptatem accusantium. Nostrum quod dicta voluptatum qui.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(55,10,4,'Perferendis sunt aut sunt at aspernatur tempora est. Aut saepe consequatur voluptatem. Quam porro qui rerum id quae deleniti. Nobis qui in velit voluptatibus et sit et in.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(56,6,1,'Beatae vel aut ut earum. Quae sed nam sunt ratione nam. Sed labore ab aut quis consequatur minima. Deserunt similique sunt voluptatem aut id quod molestias. Sunt laborum ut ipsam architecto autem.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(57,7,5,'Minima dicta voluptatum autem. Accusantium blanditiis et ut laborum reprehenderit sit. Nobis vel qui rerum et corporis sint. Ex vel corporis nemo.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(58,12,1,'Neque sed qui maxime libero aut pariatur. Sed fuga et laboriosam dolores similique deserunt. At qui saepe aliquam voluptatem.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(59,1,2,'Aspernatur harum pariatur consequatur reprehenderit dolorem quo. Odit vitae nulla dolore ipsum dolores. Minima voluptate cumque deserunt est. Quas voluptatibus odio facilis doloribus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(60,11,4,'Veritatis dignissimos consequatur nihil sit neque explicabo. Iste voluptas vero odit omnis animi quo. Non et cumque at necessitatibus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(61,17,2,'Ut ipsum quia laborum dolorem. Et suscipit et provident aut nisi. Iste voluptatibus sit est error qui magnam alias.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(62,2,3,'Nobis adipisci unde et saepe ut hic. Error enim eligendi repudiandae culpa. Quas corrupti et nostrum sint esse.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(63,12,4,'Autem expedita molestias necessitatibus vel inventore fugiat molestiae. Quia quia qui provident quam molestiae et. Quo totam at aliquam quae tempora laborum.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(64,5,1,'Qui sed dolores et laudantium earum quis quaerat et. Rerum maiores eligendi ipsa sit ut ex assumenda. Unde fugiat vero ut non. Quibusdam neque labore molestiae enim tempore libero repellendus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(65,6,3,'Autem praesentium ut voluptatem rem. Ut et illum rerum excepturi fugit. Amet explicabo molestiae sit dignissimos exercitationem velit aut. Ipsum magni ab laudantium.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(66,8,5,'Quia accusantium labore maiores. Repudiandae earum aut consequatur architecto. Ut eos non commodi quibusdam ut cum quasi. Suscipit dolores id non delectus vero consectetur.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(67,20,3,'Et quia aut sed unde impedit officiis. Ut suscipit consequatur in dolore nobis. Dolores aut minus quia.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(68,20,1,'Quis voluptates quidem perferendis perspiciatis. Sed eos aliquam eum nihil. Ut nisi quasi qui et ut. Soluta ipsam reprehenderit placeat ut animi consequuntur enim. In unde ullam et repudiandae.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(69,6,5,'Enim est doloribus possimus. Ex molestiae porro aut error. Aperiam nobis ut omnis molestiae consequuntur et repellendus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(70,20,1,'Repellendus omnis quas ratione similique. Ut quasi ut sunt cumque maxime aut assumenda. Voluptas sunt adipisci ut molestiae inventore deleniti cum. Ullam deleniti minus facere libero repellat.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(71,20,2,'Perspiciatis officia labore rem pariatur iure aspernatur doloremque. Dolorem impedit quae dolores. Voluptate voluptatem nam architecto. Sit consequatur commodi error nisi nam non.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(72,12,1,'Illum rem aperiam non voluptas eius. Dolore reprehenderit nam nihil autem saepe harum. Consequatur nihil laborum modi eos.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(73,13,3,'Magni aut nisi quibusdam fuga quaerat veniam autem. Ea corrupti consequatur voluptatem error iusto dolorum praesentium. Autem repellat illum assumenda aut.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(74,6,1,'Amet voluptates commodi iure necessitatibus in dolorem. Aut nam recusandae dolor omnis dignissimos veniam porro explicabo. Sequi quis officia ex id animi et. Non voluptas quis quia ullam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(75,7,2,'Ut ducimus quibusdam distinctio ut. Delectus error maiores qui aliquid iusto sed minus. Consequatur tempora suscipit et maxime cum.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(76,18,3,'Libero quasi facere repellendus omnis non debitis modi. Veniam dicta dolore et aut consequatur reiciendis aut.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(77,14,1,'Id voluptatem consequatur ad animi hic qui. Nobis sed tempora unde et qui. Beatae et consectetur inventore soluta dicta tenetur. Iste minus et doloribus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(78,19,4,'Est et in sint. Deserunt quis harum amet similique omnis necessitatibus minima.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(79,2,5,'Temporibus est repellat asperiores ut nobis ea. At omnis nulla dolorem doloribus. Non excepturi aspernatur vel repellendus. Deleniti est reiciendis delectus.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(80,11,1,'Quae tenetur ratione vitae sunt nam minima non. Cupiditate ipsa suscipit sed odio doloremque. Aut illo aliquam quia voluptatem qui. Possimus similique et dicta necessitatibus numquam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(81,18,4,'Eum molestiae aperiam quod cupiditate architecto et. Maiores ut corrupti doloribus. Sed laboriosam qui quia in ut odio. Cum magni velit alias eveniet rerum quia ratione animi.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(82,12,5,'Id sed in placeat delectus exercitationem dolor. Sit ut nam adipisci ea quasi quibusdam aperiam. Pariatur exercitationem laboriosam mollitia aliquam voluptatibus. Neque explicabo fugit velit quaerat.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(83,16,4,'Ex qui est quis repellat laboriosam. Possimus expedita et sit quibusdam. Quis voluptas consequatur et aut qui cum.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(84,4,1,'Laboriosam nostrum optio dolores sunt expedita nisi. Dolorem libero et maiores temporibus et provident labore. Asperiores maiores ut eos et ut. Reprehenderit quia voluptate provident non alias.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(85,7,3,'Omnis omnis iure reprehenderit nisi. Alias fugit quam omnis dicta. Doloribus ut consectetur architecto consectetur libero error.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(86,16,2,'In non omnis quaerat veniam. Laboriosam aut enim ut vitae asperiores accusantium. Quaerat ut esse veritatis quod rerum rerum. Et voluptatum qui aliquam voluptas porro aut quod.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(87,18,4,'Voluptas aut omnis qui et. Repellat natus possimus quam. Neque minima optio ut atque rem dicta architecto. Nisi et eos esse hic et et aut voluptatum. Omnis ullam rerum et possimus in eum.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(88,15,1,'Cumque maxime praesentium ut velit. Ad nemo voluptatum amet qui non fuga. Est debitis velit aliquam incidunt debitis velit.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(89,20,2,'Laborum praesentium reiciendis porro numquam sed commodi sed. Iure sed et dignissimos rerum doloremque quis. Esse accusantium occaecati tempore architecto quod rerum aperiam.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(90,18,5,'Provident explicabo quia vero quibusdam sit. Et dolore error provident. Aut praesentium dolor at qui. Facilis quia est molestias.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(91,7,3,'Aut saepe saepe a quibusdam ea. Qui qui sed molestiae ipsam. Molestiae omnis repudiandae nulla et fugiat. Rerum soluta exercitationem praesentium iure suscipit et.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(92,15,2,'Cupiditate placeat fugiat molestiae ullam quis eum. Voluptatem unde omnis earum aliquid ullam repellendus dicta.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(93,13,3,'Qui doloribus aliquam sapiente laborum quae quas excepturi. Exercitationem qui porro provident est suscipit id. Deleniti esse eius ab sed. Et placeat quam fuga sed eum rerum.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(94,20,2,'Optio sit dolor fuga in recusandae ipsa. Reprehenderit porro voluptas error ab. Quasi odit modi et.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(95,14,1,'Nihil aut nam autem eaque voluptas quia eos amet. Esse consectetur ut id beatae sapiente. Aut repellat est quia recusandae rerum voluptate ex.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(96,1,5,'Mollitia culpa aut quasi quod molestiae doloribus. Quo quibusdam at atque ipsam ipsa fuga aut rerum. Ipsam nulla necessitatibus nihil officia ipsa dolor omnis.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(97,2,3,'Aut pariatur totam accusantium aut eveniet consequatur sed. Iste et non vero voluptas. Beatae ut est sit magni. In aut officiis dolorum optio alias saepe.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(98,2,5,'Doloremque repellendus at quia quia eos culpa. Fugiat officiis in impedit possimus velit expedita dolores. Non aut voluptatem est quia.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(99,15,2,'Consequatur ab esse culpa exercitationem aut. Molestias id neque voluptate est culpa nisi. Officia aut nam corrupti culpa accusantium itaque. Temporibus et dolor assumenda placeat maxime qui.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(100,5,3,'Ea fugiat dignissimos rerum et soluta ullam rerum quod. Distinctio optio ut accusamus atque rem veritatis. Qui culpa consequatur quas voluptatum. Alias et voluptatum et assumenda sint consequatur.','Amazon','2024-01-22 21:53:11','2024-01-22 21:53:11'),(101,15,6,'wd',NULL,'2024-01-23 19:33:53','2024-01-23 19:33:53');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_100000_create_password_reset_tokens_table',1),(2,'2014_12_14_122917_create_users_table',1),(3,'2019_05_03_000001_create_customer_columns',1),(4,'2019_05_03_000002_create_subscriptions_table',1),(5,'2019_05_03_000003_create_subscription_items_table',1),(6,'2019_08_19_000000_create_failed_jobs_table',1),(7,'2019_12_14_000001_create_personal_access_tokens_table',1),(8,'2023_12_09_233229_create_products_table',1),(9,'2024_01_03_162054_user_tickets_migration',1),(10,'2024_01_05_162031_create_comments_table',1),(11,'2024_01_09_172031_create_projects_table',1),(12,'2024_01_09_173953_add_column_project_id_to_user_tickets_table',1),(13,'2024_01_11_161948_create_projects_users_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',6,'authToken','4c75fc158abd3d6d8496d4276e276963799d54f6e07fbd275aef3d63bbb4ccb2','[\"*\"]',NULL,NULL,'2024-01-23 02:24:30','2024-01-23 02:24:30'),(2,'App\\Models\\User',7,'authToken','75b4d25c19bdd225c31cd4c892bb026055be3b77ddb83f8eb1ff959d02a01842','[\"*\"]',NULL,NULL,'2024-01-25 23:52:17','2024-01-25 23:52:17'),(3,'App\\Models\\User',7,'main','50b41ddc3b7e4d495e47f6910a4df495457ace888e1f9d3fb980206f6fc31f32','[\"*\"]',NULL,NULL,'2024-01-25 23:52:58','2024-01-25 23:52:58'),(4,'App\\Models\\User',8,'token','02a001731001425b63f867dab96fd122f8d473c5a07f715bc62c48bd0242a877','[\"*\"]',NULL,NULL,'2024-01-30 02:23:50','2024-01-30 02:23:50'),(5,'App\\Models\\User',8,'main','cc0d0eb9e7178e4f48de5bc05404e532e9e40a9491fb97cfe1ca1f9e0e3a2210','[\"*\"]',NULL,NULL,'2024-01-30 19:48:02','2024-01-30 19:48:02'),(6,'App\\Models\\User',8,'main','57662e97da1e53336646833d27dfc01ac9e4fe36f3d0936671d3deb15a37b968','[\"*\"]',NULL,NULL,'2024-01-30 19:48:31','2024-01-30 19:48:31'),(7,'App\\Models\\User',8,'token','5a35edf87759a43b65815415693c3eada194f02e1319a3c19084e3929e129503','[\"*\"]',NULL,NULL,'2024-01-30 22:59:17','2024-01-30 22:59:17'),(8,'App\\Models\\User',8,'token','06534bfaa0366a6a662b381ec7c6386ec8d0905a6ca302debed04d03353e6efd','[\"*\"]',NULL,NULL,'2024-01-30 23:03:32','2024-01-30 23:03:32'),(9,'App\\Models\\User',8,'token','afec4c34d46f80465bfb0251c72ea902799748a3e4621a08632ac9284fbd2a2a','[\"*\"]',NULL,NULL,'2024-01-30 23:07:08','2024-01-30 23:07:08'),(10,'App\\Models\\User',8,'token','6a0898606aad0c6d209842cc3bc77762ef81779414f723da51337fa1dd9f090c','[\"*\"]',NULL,NULL,'2024-01-30 23:07:32','2024-01-30 23:07:32'),(11,'App\\Models\\User',8,'token','67450a2407292afa630749a235bcca454fbe2be7b2d18f30461b43dab4bc4e4e','[\"*\"]',NULL,NULL,'2024-01-30 23:09:59','2024-01-30 23:09:59'),(12,'App\\Models\\User',8,'token','ab6be9d601f9d676a4257de5187debb258bc2ef5acbfc2d8e04b781c44048da1','[\"*\"]',NULL,NULL,'2024-01-30 23:27:06','2024-01-30 23:27:06'),(13,'App\\Models\\User',8,'main','003c873922f78e64d2953862ae17de0b80f1201d64303976b978718124ea8d09','[\"*\"]',NULL,NULL,'2024-01-30 23:30:31','2024-01-30 23:30:31'),(14,'App\\Models\\User',8,'main','8b16c4aa2a6ede22f0c6aff9a7bf572475ca305a681168bdc9ef0786e26966e6','[\"*\"]',NULL,NULL,'2024-01-30 23:36:12','2024-01-30 23:36:12'),(15,'App\\Models\\User',8,'token','64819b786fbdea7b2e9ec1842068a7f9735d3448808eb2c7ce6c8436592556fa','[\"*\"]',NULL,NULL,'2024-01-30 23:40:10','2024-01-30 23:40:10'),(16,'App\\Models\\User',8,'token','b037894f9b8646e602a0afe98c6c168838c701362185898601599363a2d78447','[\"*\"]',NULL,NULL,'2024-01-31 00:46:32','2024-01-31 00:46:32'),(17,'App\\Models\\User',8,'token','1ae7f34efd7f8d922dac042f6a252719401217ef3c765a8bbc35a25dce67ef1b','[\"*\"]',NULL,NULL,'2024-01-31 00:47:50','2024-01-31 00:47:50'),(18,'App\\Models\\User',8,'main','2efb5fdb02dbc36dc01b76c9ca6e390d7b0159e62adb51a2fd37984907ec95f3','[\"*\"]',NULL,NULL,'2024-01-31 00:53:07','2024-01-31 00:53:07'),(19,'App\\Models\\User',8,'main','f1d32828515fc2318a09c6cf2ba828b41039164e81a72bad6d9b7c36dcef6bd1','[\"*\"]',NULL,NULL,'2024-01-31 01:34:35','2024-01-31 01:34:35'),(20,'App\\Models\\User',8,'main','949238efddb00bedfbbbafaf5f8f9a30971e0974000ece89d69d1b0c225b1ced','[\"*\"]',NULL,NULL,'2024-01-31 01:38:57','2024-01-31 01:38:57'),(21,'App\\Models\\User',8,'main','612955b7c441c64132d8adabeefcbd0c6471412c29ee1fb5f7a81fcae47d7e03','[\"*\"]',NULL,NULL,'2024-01-31 20:28:29','2024-01-31 20:28:29'),(22,'App\\Models\\User',8,'main','301b161abce7671f88e0b0f3e176a66e189cc8569bd32171ef3d72e673245ea6','[\"*\"]',NULL,NULL,'2024-01-31 21:22:43','2024-01-31 21:22:43'),(23,'App\\Models\\User',8,'main','b99c4dc165723fc8221789b22de23766fc252fdd5b9a403a5a8b95350363409f','[\"*\"]',NULL,NULL,'2024-01-31 21:24:15','2024-01-31 21:24:15'),(24,'App\\Models\\User',8,'main','d8f1415345ac5e4ec77201df9c0ec617d2762ac93350404e4225b5c0b371ab14','[\"*\"]',NULL,NULL,'2024-02-01 01:26:55','2024-02-01 01:26:55');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Clay Langworth','Aut nihil ut consectetur et quaerat omnis iste quo. Laudantium iure nihil quibusdam. Consequatur quibusdam adipisci et omnis. Qui consectetur ipsam facere ullam incidunt iste.',213.86,'2024-01-22 21:53:10','2024-01-22 21:53:10'),(2,'Prof. Harmony Gerhold','Minima ut sunt blanditiis sapiente et enim id rerum. Rerum omnis vel ducimus quia deserunt repellendus amet. Corrupti id possimus voluptatem maiores est.',136.72,'2024-01-22 21:53:10','2024-01-22 21:53:10'),(3,'Jameson Koch','Enim magni ratione ullam consectetur et dolores. Ullam qui eos odio omnis aperiam aut.',136.38,'2024-01-22 21:53:10','2024-01-22 21:53:10');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attachments` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `board_id` int DEFAULT '1',
  `goals` longtext COLLATE utf8mb4_unicode_ci,
  `releases` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (3,'BugTrag','<p>Test One, Two...</p><p><br></p><p><br></p><p>SEGAAAA!</p>','Open','public/uploads/1705942885.png',0,'0',0,'2024-01-22 22:01:25','2024-01-22 22:01:25'),(6,'Dune II. The battle for Arrakis','<p>Enemy unit - approaching! </p><p><br></p><p>Yes, sir. Moving out! </p><p><br></p><p>Reporting. Acknowledged! </p>','Open','public/uploads/1706132180.png',0,'0',0,'2024-01-25 02:36:20','2024-01-25 21:11:00'),(7,'Sonic teh Hedgehog','<p><strong>Gota go Fast! </strong></p>','Open','public/uploads/1706133148.png',0,'0',0,'2024-01-25 02:52:28','2024-01-25 02:52:28');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_users`
--

DROP TABLE IF EXISTS `projects_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `project_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `projects_users_user_id_foreign` (`user_id`),
  KEY `projects_users_project_id_foreign` (`project_id`),
  CONSTRAINT `projects_users_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  CONSTRAINT `projects_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_users`
--

LOCK TABLES `projects_users` WRITE;
/*!40000 ALTER TABLE `projects_users` DISABLE KEYS */;
INSERT INTO `projects_users` VALUES (40,3,3,'2024-01-22 23:52:55','2024-01-22 23:52:55'),(42,5,3,'2024-01-22 23:53:04','2024-01-22 23:53:04'),(46,4,3,'2024-01-23 02:21:48','2024-01-23 02:21:48'),(50,6,3,'2024-01-25 02:31:32','2024-01-25 02:31:32'),(51,6,7,'2024-01-25 02:52:45','2024-01-25 02:52:45'),(52,4,7,'2024-01-28 22:47:51','2024-01-28 22:47:51'),(53,7,6,'2024-01-28 22:47:59','2024-01-28 22:47:59'),(54,6,6,'2024-01-28 22:47:59','2024-01-28 22:47:59'),(55,5,6,'2024-01-28 22:47:59','2024-01-28 22:47:59'),(56,8,6,'2024-01-30 19:49:09','2024-01-30 19:49:09'),(57,9,6,'2024-01-30 19:49:09','2024-01-30 19:49:09'),(58,9,7,'2024-01-31 01:04:57','2024-01-31 01:04:57'),(59,8,7,'2024-01-31 01:04:57','2024-01-31 01:04:57');
/*!40000 ALTER TABLE `projects_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription_items`
--

DROP TABLE IF EXISTS `subscription_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `subscription_id` bigint unsigned NOT NULL,
  `stripe_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_product` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subscription_items_stripe_id_unique` (`stripe_id`),
  KEY `subscription_items_subscription_id_stripe_price_index` (`subscription_id`,`stripe_price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription_items`
--

LOCK TABLES `subscription_items` WRITE;
/*!40000 ALTER TABLE `subscription_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscriptions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subscriptions_stripe_id_unique` (`stripe_id`),
  KEY `subscriptions_user_id_stripe_status_index` (`user_id`,`stripe_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions`
--

LOCK TABLES `subscriptions` WRITE;
/*!40000 ALTER TABLE `subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tickets`
--

DROP TABLE IF EXISTS `user_tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tickets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `project_id` bigint unsigned DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'To Do',
  `attachments` text COLLATE utf8mb4_unicode_ci,
  `comments` text COLLATE utf8mb4_unicode_ci,
  `priority` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reporter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `assignee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'None',
  `watch` tinyint(1) NOT NULL DEFAULT '1',
  `linked_issues` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_tickets_project_id_foreign` (`project_id`),
  CONSTRAINT `user_tickets_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tickets`
--

LOCK TABLES `user_tickets` WRITE;
/*!40000 ALTER TABLE `user_tickets` DISABLE KEYS */;
INSERT INTO `user_tickets` VALUES (1,NULL,'Dr. Jace Ondricka II','Illo libero aut accusantium impedit exercitationem sit mollitia et. Sit totam corporis placeat unde rerum. Aperiam quisquam ullam est voluptate.','To Do',NULL,NULL,'2','Gaetano Langworth','None',1,NULL,'2024-01-22 21:53:10','2024-01-23 19:38:16'),(2,3,'Mozelle Bednar II','Ducimus dolorem illum accusamus repellat dicta illo et. Nihil vel illum consectetur natus velit et ipsum. Consequatur consequatur modi officiis et pariatur accusantium.','To Do',NULL,NULL,'3','Mrs. Chanel Raynor','None',1,NULL,'2024-01-22 21:53:10','2024-01-22 21:59:59'),(3,NULL,'Dr. Benton Treutel V','Facere soluta quidem aut repellendus qui a excepturi ea. Repudiandae magni sed enim quo aut. Temporibus error qui cupiditate est et sit modi.','To Do',NULL,NULL,'1','Ewald Hahn','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 21:59:59'),(4,NULL,'Providenci Reilly','Possimus culpa esse aut. Voluptas distinctio eos optio laboriosam omnis asperiores. Quo ipsum est fuga fugiat. Totam quibusdam quo debitis cumque amet quam.','To Do',NULL,NULL,'1','Prof. Brennon Boyle Jr.','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 21:59:59'),(5,NULL,'Miss Jennifer Wehner','Quaerat est recusandae et adipisci placeat optio. Itaque culpa optio molestias repellendus. Architecto ducimus inventore sed assumenda.','To Do',NULL,NULL,'2','Albertha Jerde','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(6,NULL,'Jailyn McLaughlin','Enim dolores accusamus laudantium tenetur delectus sunt. Quia vel fuga molestiae architecto accusantium est laboriosam consequuntur. Minus facere in sint ut.','To Do',NULL,NULL,'1','Gertrude Howell MD','None',1,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(7,NULL,'Ray Legros I','Perferendis natus dolorum accusantium porro. Vero impedit ducimus quibusdam quas culpa.','To Do',NULL,NULL,'1','Bryce Schinner','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(8,NULL,'Dr. Donnell Balistreri II','Iste qui itaque tempora nisi. Explicabo rerum deserunt quaerat dolore dolorem autem. Quia neque ducimus in ea. Fugit quaerat asperiores non esse.','To Do',NULL,NULL,'1','Ansley Lemke','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(9,NULL,'Prof. Pete King','Natus non consequatur dolorem enim. Quod enim doloremque debitis dolore culpa at. Aut omnis culpa dolores est tempora expedita.','To Do',NULL,NULL,'1','Alfred Towne PhD','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(10,NULL,'Al Gorczany','Odio est libero libero sequi praesentium commodi. Dignissimos autem laborum illo deserunt omnis rem perspiciatis. Qui dolore quod iste delectus reprehenderit.','To Do',NULL,NULL,'3','Carleton Pagac','None',1,NULL,'2024-01-22 21:53:10','2024-01-22 21:59:59'),(11,NULL,'Prof. Wellington Haley','Dolore amet molestias eaque. Quae quo pariatur et ut commodi vero impedit omnis. Aut aut quod rerum a.','To Do',NULL,NULL,'3','Keshaun Goodwin','None',0,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(12,3,'Valerie Bartell','Porro reprehenderit reiciendis rerum reprehenderit. Quaerat maiores magnam fugiat ut aut laudantium libero. Eos voluptate nostrum inventore. Adipisci tempora dolor animi ut.','To Do',NULL,NULL,'3','Dr. Weldon Casper DVM','None',1,NULL,'2024-01-22 21:53:10','2024-01-23 19:37:10'),(13,3,'Lupe Schimmel I','Repellat velit et occaecati rerum. Ut dolorem hic dolor. Pariatur accusantium sint aut vel. Maxime sapiente consequatur ut voluptatem sit.','To Do',NULL,NULL,'3','Autumn Hayes','None',0,NULL,'2024-01-22 21:53:10','2024-01-23 19:34:15'),(14,3,'Elta O\'Hara','Aut enim dolorem voluptatibus reiciendis qui consequatur. Quia occaecati blanditiis praesentium illum vitae voluptatibus. Omnis et natus odit cumque.','Done',NULL,NULL,'3','Walter Rohan','None',0,NULL,'2024-01-22 21:53:10','2024-01-23 19:35:47'),(15,NULL,'Gonzalo Feest','Non et omnis mollitia nisi et libero quae. Laboriosam ratione placeat repudiandae optio non. Vel quae quo quas excepturi qui. Est voluptas illum odit sed ratione beatae porro.','To Do',NULL,NULL,'2','Delores Kohler II','None',1,NULL,'2024-01-22 21:53:10','2024-01-22 21:59:59'),(16,NULL,'Mr. Woodrow Hauck MD','Itaque ex asperiores tempora quod velit autem. Quos tenetur debitis sit tempore omnis esse illum. Possimus sunt dolorem quaerat consequatur quasi est. Nemo dolores dicta quia et dolorem cumque.','To Do',NULL,NULL,'1','Molly Dickens III','None',0,NULL,'2024-01-22 21:53:10','2024-01-23 19:45:30'),(17,NULL,'Rowan Bergstrom','Et vel vitae laborum est. Officiis consequuntur eveniet quia blanditiis rem molestiae.','To Do',NULL,NULL,'2','Dr. Sonia Schultz','None',1,NULL,'2024-01-22 21:53:10','2024-01-22 22:00:29'),(18,NULL,'Prof. Hallie Lindgren','Quibusdam asperiores quia aut nobis perferendis sint maxime ad. Quia aut distinctio necessitatibus. Eum corporis sed reiciendis molestiae cum sequi.','To Do',NULL,NULL,'1','Jeffrey Cassin Sr.','None',1,NULL,'2024-01-22 21:53:10','2024-01-23 19:38:16'),(19,6,'Berry Macejkovic','Blanditiis debitis sunt et ipsum error. Aperiam nam adipisci et. Vel quam nesciunt magnam eos maiores enim aspernatur. Quas ex corrupti omnis expedita.','Done',NULL,NULL,'1','Joe Abernathy','None',0,NULL,'2024-01-22 21:53:10','2024-01-28 23:03:03'),(20,NULL,'Jimmie Glover','Omnis in quia facilis possimus inventore consequuntur recusandae. Aliquid explicabo cupiditate rem consequatur quaerat. In quidem omnis enim expedita vitae nostrum assumenda.','In Progress',NULL,NULL,'2','Nyasia Kuhn','None',1,NULL,'2024-01-22 21:53:10','2024-01-22 22:02:05'),(21,3,'test','<p>test</p>','In Progress','public/uploads/1706019319.jpg',NULL,'2','Jeff','None',1,NULL,'2024-01-23 19:15:19','2024-01-25 04:19:47'),(22,3,'jestst','<p>Fett</p>','Done','public/uploads/1706120680.png',NULL,'2','Jeff','Jeff',1,NULL,'2024-01-24 23:24:40','2024-01-25 04:19:54'),(23,6,'12345','<p>12345</p>','Done','public/uploads/1706209287.png',NULL,'2','Pal','Jadyn Wintheiser PhD',1,NULL,'2024-01-26 00:01:27','2024-01-26 00:01:32');
/*!40000 ALTER TABLE `user_tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `stripe_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pm_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pm_last_four` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_stripe_id_index` (`stripe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jadyn Wintheiser PhD','oran52@example.net','2024-01-22 21:53:10','$2y$12$xhl6LAbEwF4bIYv.efv5kOUstLlwiThVY7By1GvV0eyCjmEQpLtO6','user','6a8RFMfxkM','2024-01-22 21:53:10','2024-01-22 21:53:10',NULL,NULL,NULL,NULL),(2,'Harvey Raynor','lavonne32@example.org','2024-01-22 21:53:10','$2y$12$xhl6LAbEwF4bIYv.efv5kOUstLlwiThVY7By1GvV0eyCjmEQpLtO6','user','QxK9eulOMK','2024-01-22 21:53:10','2024-01-22 21:53:10',NULL,NULL,NULL,NULL),(3,'Dr. Luigi Berge','whansen@example.net','2024-01-22 21:53:10','$2y$12$xhl6LAbEwF4bIYv.efv5kOUstLlwiThVY7By1GvV0eyCjmEQpLtO6','user','qfncFIO1vb','2024-01-22 21:53:10','2024-01-22 21:53:10',NULL,NULL,NULL,NULL),(4,'Eliezer Schmitt','bella.toy@example.net','2024-01-22 21:53:10','$2y$12$xhl6LAbEwF4bIYv.efv5kOUstLlwiThVY7By1GvV0eyCjmEQpLtO6','user','VceU3CHGgo','2024-01-22 21:53:10','2024-01-22 21:53:10',NULL,NULL,NULL,NULL),(5,'Mr. Adolphus Lebsack PhD','ferry.quinten@example.com','2024-01-22 21:53:10','$2y$12$xhl6LAbEwF4bIYv.efv5kOUstLlwiThVY7By1GvV0eyCjmEQpLtO6','user','7Di2ZxAiDZ','2024-01-22 21:53:10','2024-01-22 21:53:10',NULL,NULL,NULL,NULL),(6,'Jeff','d@test.com',NULL,'$2y$12$I8Iol3X5QeSgLizXg7IwM.jmCewfrGXCG7yqHkA9Gc8gZcAVUqB0K','user',NULL,'2024-01-23 02:24:30','2024-01-23 02:24:30',NULL,NULL,NULL,NULL),(7,'Pal','pal@gmail.com',NULL,'$2y$12$USGOwzyVGA7D/dVawxXXeeo6gcODSfxqWkn.tAnnKY62l2PYb78YS','user',NULL,'2024-01-25 23:52:16','2024-01-25 23:52:16',NULL,NULL,NULL,NULL),(8,'Dzmitry Motuz','dima@dima.com',NULL,'$2y$12$i06x.AIx/4popMC4D6yr2.NSiGiDhOeEWVOI9KnY9/Z/b4Y7yG/P.','user',NULL,'2024-01-29 23:46:07','2024-01-29 23:46:07',NULL,NULL,NULL,NULL),(9,'Dzmitry Motuz','dima@test.com',NULL,'$2y$12$nYjErO7kzhHrzdRBeElmMecsYlBb65yE0nFWuzMpTDGy6IJA7p5mu','user',NULL,'2024-01-30 00:40:52','2024-01-30 00:40:52',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-31 15:37:26
