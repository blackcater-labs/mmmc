-- CreateTable
CREATE TABLE "ult_comic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ultId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "comic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comicId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "cover" TEXT,
    "landscapeCover" TEXT,
    "summary" TEXT,
    "langCode" TEXT,
    "qualityCode" TEXT,
    "versionName" TEXT,
    "readingMode" TEXT,
    "ageRating" TEXT,
    "status" TEXT,
    "releasedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "ultComicId" INTEGER,
    CONSTRAINT "comic_ultComicId_fkey" FOREIGN KEY ("ultComicId") REFERENCES "ult_comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "realName" TEXT,
    "cover" TEXT,
    "role" TEXT,
    "comicId" INTEGER,
    CONSTRAINT "author_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "actorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "cover" TEXT,
    "bio" TEXT,
    "comicId" INTEGER,
    CONSTRAINT "actor_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tagId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "cover" TEXT,
    "landscapeCover" TEXT,
    "i18n" TEXT DEFAULT '{}',
    "comicId" INTEGER,
    CONSTRAINT "tag_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "genreId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "cover" TEXT,
    "landscapeCover" TEXT,
    "i18n" TEXT DEFAULT '{}',
    "comicId" INTEGER,
    CONSTRAINT "genre_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chapterId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT,
    "no" INTEGER,
    "type" TEXT,
    "cover" TEXT,
    "pageCount" INTEGER,
    "path" TEXT,
    "comicId" INTEGER,
    CONSTRAINT "chapter_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pageId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "no" INTEGER,
    "type" TEXT,
    "ext" TEXT,
    "imageSize" INTEGER,
    "imageWidth" INTEGER,
    "imageHeight" INTEGER,
    "chapterId" INTEGER,
    CONSTRAINT "page_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapter" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nickname" TEXT,
    "avatar" TEXT,
    "bio" TEXT,
    "role" TEXT DEFAULT 'User'
);

-- CreateTable
CREATE TABLE "user_reading_history" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "historyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "comicId" INTEGER NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "user_reading_history_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_reading_history_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_reading_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collectionId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "user_collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_collection_comic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userCollectionComicId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "comicId" INTEGER NOT NULL,
    "userCollectionId" INTEGER,
    CONSTRAINT "user_collection_comic_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_collection_comic_userCollectionId_fkey" FOREIGN KEY ("userCollectionId") REFERENCES "user_collection" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ult_comic_ultId_key" ON "ult_comic"("ultId");

-- CreateIndex
CREATE UNIQUE INDEX "comic_comicId_key" ON "comic"("comicId");

-- CreateIndex
CREATE UNIQUE INDEX "author_authorId_key" ON "author"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "actor_actorId_key" ON "actor"("actorId");

-- CreateIndex
CREATE UNIQUE INDEX "tag_tagId_key" ON "tag"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "genre_genreId_key" ON "genre"("genreId");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_chapterId_key" ON "chapter"("chapterId");

-- CreateIndex
CREATE UNIQUE INDEX "page_pageId_key" ON "page"("pageId");

-- CreateIndex
CREATE UNIQUE INDEX "user_userId_key" ON "user"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_reading_history_historyId_key" ON "user_reading_history"("historyId");

-- CreateIndex
CREATE UNIQUE INDEX "user_collection_collectionId_key" ON "user_collection"("collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "user_collection_comic_userCollectionComicId_key" ON "user_collection_comic"("userCollectionComicId");
