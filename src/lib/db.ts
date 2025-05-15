// src/lib/db.ts
// import mysql from 'mysql2/promise';

// export const db : mysql.Pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Tikheatharva#22',
//   database: 'finances',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// import { PrismaClient } from "../../generated/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

