import { env } from "@/env.mjs"
import { type Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema/**/*.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL ?? "",
  },
} satisfies Config
