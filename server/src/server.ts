import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = 3333;
  
const app = fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: process.env.BASEURL
});

app.get('/', async() => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith:"Beber"
      }
    }
  })
  return habits;
})

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP server running on port ${PORT}`)
});