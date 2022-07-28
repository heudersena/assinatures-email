-- CreateTable
CREATE TABLE "pinctures" (
    "id" TEXT NOT NULL,
    "assinature_emailId" TEXT,

    CONSTRAINT "pinctures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pinctures" ADD CONSTRAINT "pinctures_assinature_emailId_fkey" FOREIGN KEY ("assinature_emailId") REFERENCES "assinatures_email"("id") ON DELETE SET NULL ON UPDATE CASCADE;
