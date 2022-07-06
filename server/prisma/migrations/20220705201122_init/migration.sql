-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "AddedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cin" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("cin")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_cin_key" ON "Company"("cin");
