-- CreateTable
CREATE TABLE "logins" (
    "uid" SERIAL NOT NULL,
    "username" VARCHAR(15) NOT NULL,
    "pass" VARCHAR(255) NOT NULL,

    CONSTRAINT "logins_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "sender" VARCHAR(10),
    "receiver" VARCHAR(100),
    "amount" VARCHAR(100),
    "transac_date" VARCHAR(100),

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "logins_username_key" ON "logins"("username");

