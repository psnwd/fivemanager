import type { Config } from "drizzle-kit"

import { env } from "@/lib/env.mjs"

export default {
  schema: "./src/lib/db/schema",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  },
} satisfies Config
