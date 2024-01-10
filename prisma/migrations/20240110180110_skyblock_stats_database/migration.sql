-- CreateTable
CREATE TABLE `skyblockItem` (
    `_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `tier` VARCHAR(191) NULL,
    `skin` VARCHAR(191) NULL,
    `npc_sell_price` INTEGER NULL,
    `wiki_link` VARCHAR(191) NULL,

    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vanillaTextures` (
    `_id` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `vanillaTextures_material_key`(`material`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FurfSkyRebornTextures` (
    `_id` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `FurfSkyRebornTextures_material_key`(`material`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PacksHQTextures` (
    `_id` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PacksHQTextures_material_key`(`material`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HypixelPlusTextures` (
    `_id` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `HypixelPlusTextures_material_key`(`material`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `missingItems` (
    `_id` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `pack` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `missingItems_material_key`(`material`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
