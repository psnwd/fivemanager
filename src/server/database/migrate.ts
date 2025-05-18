import { env } from "@/env.mjs"
import { drizzle } from "drizzle-orm/mysql2"
import { migrate } from "drizzle-orm/mysql2/migrator"
import mysql from "mysql2/promise"

const runMigrate = async () => {
  if (!env.DATABASE_URL) {
    throw new Error("Database configurations are not defined")
  }

  const connection = await mysql.createConnection({
    host: "host",
    user: "user",
    database: "database",
  })

  const db = drizzle({ client: connection })

  console.log("⏳ Running migrations...")

  const start = Date.now()

  await migrate(db, { migrationsFolder: "drizzle" })

  const end = Date.now()

  console.log("✅ Migrations completed in", end - start, "ms")

  process.exit(0)
}

runMigrate().catch((err) => {
  console.error("❌ Migration failed")
  console.error(err)
  process.exit(1)
})
