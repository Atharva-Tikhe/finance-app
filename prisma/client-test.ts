import { PrismaClient } from "@prisma/client";

async function test() {
    const prisma = new PrismaClient();
    const result = await prisma.transactions.findMany();
    console.log(result)
}

test()