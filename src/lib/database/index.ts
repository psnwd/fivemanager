import { env } from "@/env.mjs"
import { drizzle } from "drizzle-orm/node-postgres"

import * as auth from "./schema/auth"
import * as events from "./schema/events"
import * as feedbacks from "./schema/feedbacks"
import * as giveaway from "./schema/giveaway"
import * as news from "./schema/news"
import * as newsletter from "./schema/newsletter"
import * as players from "./schema/players"
import * as servers from "./schema/servers"
import * as supports from "./schema/supports"
import * as whitelist from "./schema/whitelist"

// You can specify any property from the node-postgres connection options
export const db = drizzle({
  connection: {
    connectionString: env.DATABASE_URL,
    ssl: true,
  },
  schema: {
    ...auth,
    ...events,
    ...feedbacks,
    ...giveaway,
    ...news,
    ...newsletter,
    ...players,
    ...servers,
    ...supports,
    ...whitelist,
  },
})
