/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[cin]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("cin");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cin_key" ON "Company"("cin");
