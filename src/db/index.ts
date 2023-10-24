import { env } from "@/env.mjs"
import { connect } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"

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

const connection = connect({
  url: env.DATABASE_URL,
})

export const db = drizzle(connection, {
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
