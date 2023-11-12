import { sql } from "drizzle-orm"
import {
  AnyMySqlColumn,
  index,
  int,
  mysqlSchema,
  mysqlTable,
  primaryKey,
  serial,
  text,
  timestamp,
  tinyint,
  varchar,
} from "drizzle-orm/mysql-core"

export const account = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refreshToken: varchar("refresh_token", { length: 255 }),
    accessToken: varchar("access_token", { length: 255 }),
    expiresAt: int("expires_at"),
    tokenType: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    idToken: text("id_token"),
    sessionState: varchar("session_state", { length: 255 }),
    metamaskAccount: varchar("metamask_account", { length: 255 }),
  },
  (table) => {
    return {
      accountProviderProviderAccountId: primaryKey(
        table.provider,
        table.providerAccountId
      ),
    }
  }
)

export const events = mysqlTable(
  "events",
  {
    id: serial("id").notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: int("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      eventsProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const feedbacks = mysqlTable(
  "feedbacks",
  {
    id: serial("id").notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    authorJob: varchar("authorJob", { length: 256 }).notNull(),
    authorName: varchar("authorName", { length: 256 }).notNull(),
    content: varchar("content", { length: 256 }).notNull(),
    status: int("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
    authorAvatar: varchar("authorAvatar", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      feedbacksProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const giveaway = mysqlTable(
  "giveaway",
  {
    id: serial("id").notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    type: varchar("type", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: int("status").notNull(),
    items: varchar("items", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    totalKeys: int("totalKeys").notNull(),
    remainingKeys: int("remainingKeys").notNull(),
    endTime: int("endTime").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      giveawayProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const giveawayItem = mysqlTable(
  "giveawayItem",
  {
    id: serial("id").notNull(),
    giveawayId: int("giveawayId").notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      giveawayItemProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const news = mysqlTable(
  "news",
  {
    id: serial("id").notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 2000 }).notNull(),
    status: int("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      newsProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const newsletter = mysqlTable(
  "newsletter",
  {
    id: serial("id").notNull(),
    userId: varchar("userId", { length: 191 }),
    email: varchar("email", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).notNull(),
    newsletter: tinyint("newsletter").default(0).notNull(),
    marketing: tinyint("marketing").default(0).notNull(),
    transactional: tinyint("transactional").default(0).notNull(),
    createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  },
  (table) => {
    return {
      emailIdx: index("email_idx").on(table.email),
      newsletterProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const playerName = mysqlTable(
  "playerName",
  {
    id: serial("id").notNull(),
    playerId: varchar("playerId", { length: 256 }).notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: varchar("createdAt", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      playerNameProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const players = mysqlTable(
  "players",
  {
    id: serial("id").notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    discordId: varchar("discordId", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    cfxId: varchar("cfxId", { length: 256 }).notNull(),
    lastLoginIp: varchar("lastLoginIp", { length: 256 }).notNull(),
    lastLoginDate: varchar("lastLoginDate", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      nameIdx: index("name_idx").on(table.name),
      playersProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const servers = mysqlTable(
  "servers",
  {
    id: serial("id").notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    ip: varchar("ip", { length: 256 }).notNull(),
    port: int("port").notNull(),
    status: int("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (table) => {
    return {
      ipIdx: index("ip_idx").on(table.ip),
      serversProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const session = mysqlTable(
  "session",
  {
    sessionToken: varchar("sessionToken", { length: 255 }).notNull(),
    userId: varchar("userId", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "string" }).notNull(),
    device: varchar("device", { length: 255 }),
    browser: varchar("browser", { length: 255 }),
    os: varchar("os", { length: 255 }),
    location: varchar("location", { length: 255 }),
  },
  (table) => {
    return {
      sessionProviderProviderAccountId: primaryKey(
        table.userId,
        table.sessionToken
      ),
    }
  }
)

export const supports = mysqlTable(
  "supports",
  {
    id: serial("id").notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
    message: varchar("message", { length: 256 }).notNull(),
    date: varchar("date", { length: 256 }).notNull(),
    ip: varchar("ip", { length: 256 }).notNull(),
    supportedBy: varchar("supportedBy", { length: 256 }).notNull(),
    supportedDate: varchar("supportedDate", { length: 256 }).notNull(),
    supportedIp: varchar("supportedIp", { length: 256 }).notNull(),
    supportedReason: varchar("supportedReason", { length: 256 }).notNull(),
    supportedStatus: int("supportedStatus").notNull(),
  },
  (table) => {
    return {
      supportsProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const user = mysqlTable(
  "user",
  {
    id: varchar("id", { length: 255 }).notNull(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).notNull(),
    emailVerified: timestamp("emailVerified", {
      fsp: 3,
      mode: "string",
    }).defaultNow(),
    image: varchar("image", { length: 255 }),
    role: varchar("role", { length: 255 }).default("user").notNull(),
    dob: timestamp("dob", { mode: "string" }),
  },
  (table) => {
    return {
      userProviderProviderAccountId: primaryKey(table.id),
    }
  }
)

export const verificationToken = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      verificationTokenProviderProviderAccountId: primaryKey(table.identifier),
    }
  }
)

export const whitelist = mysqlTable(
  "whitelist",
  {
    id: serial("id").notNull(),
    discordId: varchar("discordId", { length: 256 }).notNull(),
    discordName: varchar("discordName", { length: 256 }).notNull(),
    steamId: varchar("steamId", { length: 256 }).notNull(),
    fiveMid: varchar("fiveMId", { length: 256 }).notNull(),
    reason: varchar("reason", { length: 256 }).notNull(),
    message: varchar("message", { length: 256 }).notNull(),
    date: varchar("date", { length: 256 }).notNull(),
    ip: varchar("ip", { length: 256 }).notNull(),
    approvedBy: varchar("approvedBy", { length: 256 }),
    approvedDate: varchar("approvedDate", { length: 256 }),
    approvedIp: varchar("approvedIp", { length: 256 }),
    approvedReason: varchar("approvedReason", { length: 256 }),
    approvedStatus: int("approvedStatus").notNull(),
  },
  (table) => {
    return {
      discordIdIdx: index("discordId_idx").on(table.discordId),
      whitelistProviderProviderAccountId: primaryKey(table.id),
    }
  }
)
