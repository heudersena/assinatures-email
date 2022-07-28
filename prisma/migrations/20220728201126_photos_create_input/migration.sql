/*
  Warnings:

  - Added the required column `path` to the `pinctures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pinctures" ADD COLUMN     "path" TEXT NOT NULL;
