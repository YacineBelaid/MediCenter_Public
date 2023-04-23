/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Antecedants` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `Date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Medecin` VARCHAR(1000) NULL,
    `Maladie` VARCHAR(1000) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Visites` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `Date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Medecin` VARCHAR(1000) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
