/*
  Warnings:

  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_organization_id_fkey`;

-- DropTable
DROP TABLE `Organization`;
