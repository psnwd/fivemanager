import { env } from "@/env.mjs"
import { connect } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"
import { migrate } from "drizzle-orm/planetscale-serverless/migrator"

const runMigrate = async () => {
  if (!env.DATABASE_URL) {
    throw new Error("Database configurations are not defined")
  }

  const connection = connect({
    url: env.DATABASE_URL,
  })

  const db = drizzle(connection)

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
