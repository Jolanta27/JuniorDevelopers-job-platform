/*
  Warnings:

  - You are about to drop the column `Salary` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the column `author` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `JobPosting` table. All the data in the column will be lost.
  - Added the required column `companyName` to the `JobPosting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `JobPosting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPosting" DROP COLUMN "Salary",
DROP COLUMN "author",
DROP COLUMN "createdAt",
DROP COLUMN "name",
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "salary" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
