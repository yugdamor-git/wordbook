-- CreateTable
CREATE TABLE "Words" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Meanings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lang" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "word_id" TEXT NOT NULL
);
