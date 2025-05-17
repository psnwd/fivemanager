import { env } from "@/env.mjs"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: "./src/lib/database/schema/*",
  dbCredentials: {
    url: env.DATABASE_URL
  },
  verbose: true,
  strict: true,
  entities: {
    roles: true
  }
});