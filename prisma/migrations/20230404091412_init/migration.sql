-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL DEFAULT 'admin',
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;
