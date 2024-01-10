/*
  Warnings:

  - The primary key for the `FurfSkyRebornTextures` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `FurfSkyRebornTextures` table. All the data in the column will be lost.
  - The primary key for the `HypixelPlusTextures` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `HypixelPlusTextures` table. All the data in the column will be lost.
  - The primary key for the `PacksHQTextures` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `PacksHQTextures` table. All the data in the column will be lost.
  - The primary key for the `missingItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `missingItems` table. All the data in the column will be lost.
  - The primary key for the `skyblockItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `skyblockItem` table. All the data in the column will be lost.
  - The primary key for the `vanillaTextures` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `vanillaTextures` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[itemID]` on the table `skyblockItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemID` to the `skyblockItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FurfSkyRebornTextures` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    ADD PRIMARY KEY (`material`);

-- AlterTable
ALTER TABLE `HypixelPlusTextures` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    ADD PRIMARY KEY (`material`);

-- AlterTable
ALTER TABLE `PacksHQTextures` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    ADD PRIMARY KEY (`material`);

-- AlterTable
ALTER TABLE `missingItems` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    ADD PRIMARY KEY (`material`);

-- AlterTable
ALTER TABLE `skyblockItem` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    ADD COLUMN `itemID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`itemID`);

-- AlterTable
ALTER TABLE `vanillaTextures` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    ADD PRIMARY KEY (`material`);

-- CreateIndex
CREATE UNIQUE INDEX `skyblockItem_itemID_key` ON `skyblockItem`(`itemID`);
