-- CreateTable
CREATE TABLE "Repo" (
    "name" TEXT NOT NULL,
    "forked_date" TIMESTAMP(3),

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Commit" (
    "id" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "repo_name" TEXT NOT NULL,
    "branch" TEXT NOT NULL,

    CONSTRAINT "Commit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "is_student" BOOLEAN NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "error" TEXT NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repo_name_key" ON "Repo"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_username_key" ON "Student"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_github_id_key" ON "Student"("github_id");

-- AddForeignKey
ALTER TABLE "Commit" ADD CONSTRAINT "Commit_username_fkey" FOREIGN KEY ("username") REFERENCES "Student"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commit" ADD CONSTRAINT "Commit_repo_name_fkey" FOREIGN KEY ("repo_name") REFERENCES "Repo"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
