/*
  Warnings:

  - You are about to drop the column `pack` on the `missingItems` table. All the data in the column will be lost.
  - Added the required column `url` to the `missingItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FurfSkyRebornTextures` MODIFY `url` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `HypixelPlusTextures` MODIFY `url` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `PacksHQTextures` MODIFY `url` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `missingItems` DROP COLUMN `pack`,
    ADD COLUMN `url` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `skyblockItem` MODIFY `skin` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `vanillaTextures` MODIFY `url` LONGTEXT NOT NULL;
