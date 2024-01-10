/*
  Warnings:

  - Added the required column `pack` to the `missingItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `missingItems` ADD COLUMN `pack` VARCHAR(191) NOT NULL;
