-- CreateTable
CREATE TABLE `comments` (
    `id` VARCHAR(255) NOT NULL,
    `video_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `comment` VARCHAR(255) NULL,
    `likes` INTEGER NULL,
    `timestamp` TIMESTAMP(0) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `id_idx`(`video_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videos` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `channel` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `views` VARCHAR(255) NULL,
    `likes` VARCHAR(255) NULL,
    `duration` VARCHAR(255) NULL,
    `video` VARCHAR(255) NULL,
    `timestamp` TIMESTAMP(0) NULL,

    UNIQUE INDEX `idvideos_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `video_id` FOREIGN KEY (`video_id`) REFERENCES `videos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

