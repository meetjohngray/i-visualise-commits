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
    "email" TEXT NOT NULL,
    "repo_name" TEXT NOT NULL,
    "branch" TEXT NOT NULL,

    CONSTRAINT "Commit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Student" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "Commit" ADD CONSTRAINT "Commit_email_fkey" FOREIGN KEY ("email") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commit" ADD CONSTRAINT "Commit_repo_name_fkey" FOREIGN KEY ("repo_name") REFERENCES "Repo"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_email_fkey" FOREIGN KEY ("email") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
