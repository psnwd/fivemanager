import { env } from "@/env.mjs"
import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"

const poolConnection = mysql.createPool({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  port: Number(env.DATABASE_PORT),
  database: env.DATABASE_NAME,
  ssl: {},
})

export const db = drizzle({
  client: poolConnection,
})
