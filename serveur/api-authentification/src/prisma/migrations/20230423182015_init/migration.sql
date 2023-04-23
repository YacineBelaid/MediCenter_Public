/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `pro_sante` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `genre` ENUM('F', 'M', 'A') NOT NULL DEFAULT 'F',
    `telephone` INTEGER NOT NULL,
    `medecin` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `identifiant` INTEGER NOT NULL,
    `password` VARCHAR(1000) NOT NULL DEFAULT '',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `pro_sante` BOOLEAN NULL,
    `Date_naissance` VARCHAR(1000) NULL,
    `lastname` VARCHAR(1000) NULL,
    `Firstname` VARCHAR(1000) NULL,

    PRIMARY KEY (`identifiant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
