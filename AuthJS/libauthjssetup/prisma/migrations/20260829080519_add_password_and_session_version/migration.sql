/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `username`,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `sessionVersion` INTEGER NOT NULL DEFAULT 0;
