-- AlterTable
ALTER TABLE `antecedants` ADD COLUMN `dossierId` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `visites` ADD COLUMN `dossierId` INTEGER UNSIGNED NULL;

-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(200) NOT NULL,
    `Prenom` VARCHAR(200) NOT NULL,
    `Date_naissance` VARCHAR(200) NOT NULL,
    `Genre` ENUM('F', 'M', 'A') NOT NULL,
    `Ville_Naissance` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dossier` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nas` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Antecedants` ADD CONSTRAINT `Antecedants_dossierId_fkey` FOREIGN KEY (`dossierId`) REFERENCES `Dossier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Visites` ADD CONSTRAINT `Visites_dossierId_fkey` FOREIGN KEY (`dossierId`) REFERENCES `Dossier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
