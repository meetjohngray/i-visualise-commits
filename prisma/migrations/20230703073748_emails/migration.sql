/*
  Warnings:

  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Commit" DROP CONSTRAINT "Commit_email_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_email_fkey";

-- DropIndex
DROP INDEX "Student_email_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "email";

-- AddForeignKey
ALTER TABLE "Commit" ADD CONSTRAINT "Commit_email_fkey" FOREIGN KEY ("email") REFERENCES "Email"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_name_fkey" FOREIGN KEY ("name") REFERENCES "Student"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
