import { env } from "@/env.mjs"
import { type Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL ?? "",
  },
  tablesFilter: ["fivemanager_*"],
} satisfies Config
