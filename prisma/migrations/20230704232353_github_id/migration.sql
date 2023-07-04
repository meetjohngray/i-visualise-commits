/*
  Warnings:

  - You are about to drop the column `name` on the `Email` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[github_id]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `github_id` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `github_id` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_name_fkey";

-- AlterTable
ALTER TABLE "Email" DROP COLUMN "name",
ADD COLUMN     "github_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "github_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_username_key" ON "Student"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_github_id_key" ON "Student"("github_id");

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_github_id_fkey" FOREIGN KEY ("github_id") REFERENCES "Student"("github_id") ON DELETE RESTRICT ON UPDATE CASCADE;
