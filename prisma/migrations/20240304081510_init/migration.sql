/*
  Warnings:

  - You are about to drop the column `organization_id` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `users_organization_id_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `organization_id`;
