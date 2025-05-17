import {
  index,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
  integer,
  pgPolicy,
  // pgRole, // TODO: Add role permissions
  uuid,
} from "drizzle-orm/pg-core"
import { sql } from 'drizzle-orm';

export const account = pgTable(
  "account",
  {
    user_id: uuid().notNull(),
    type: varchar("type", { length: 255 }).notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refreshToken: varchar("refresh_token", { length: 255 }),
    accessToken: varchar("access_token", { length: 255 }),
    expiresAt: integer("expires_at"),
    tokenType: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    idToken: text("id_token"),
    sessionState: varchar("session_state", { length: 255 }),
    metamaskAccount: varchar("metamask_account", { length: 255 }),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    deletedAt: timestamp('deleted_at', { withTimezone: true, mode: 'string' }),
  }, (t) => [
  primaryKey({ columns: [
    t.user_id, t.provider, t.providerAccountId
  ]}),
  index("providerAccountId_idx").on(t.providerAccountId),
  index("provider_idx").on(t.provider),
  index("user_id_idx").on(t.user_id),
	pgPolicy('policy', {
		as: 'permissive',
    // to: admin,
		for: 'delete',
		using: sql``,
		withCheck: sql``,
	})],
)

export const events = pgTable(
  "events",
  {
    id: serial("id").primaryKey().notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: integer("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (t) => [
    index("title_idx").on(t.title),
    index("status_idx").on(t.status),
  ]
)

export const feedbacks = pgTable(
  "feedbacks",
  {
    id: serial("id").primaryKey().notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    authorJob: varchar("authorJob", { length: 256 }).notNull(),
    authorName: varchar("authorName", { length: 256 }).notNull(),
    content: varchar("content", { length: 256 }).notNull(),
    status: integer("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
    authorAvatar: varchar("authorAvatar", { length: 256 }).notNull(),
  },
  (t) => [
    index("title_idx").on(t.title),
    index("status_idx").on(t.status),
  ]
)

export const giveaway = pgTable(
  "giveaway",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    type: varchar("type", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: integer("status").notNull(),
    items: varchar("items", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    totalKeys: integer("totalKeys").notNull(),
    remainingKeys: integer("remainingKeys").notNull(),
    endTime: integer("endTime").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (t) => [
    index("name_idx").on(t.name),
    index("type_idx").on(t.type),
    index("status_idx").on(t.status),
    index("endTime_idx").on(t.endTime),
  ]
)

export const giveawayItem = pgTable(
  "giveawayItem",
  {
    giveawayId: integer("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
)

export const news = pgTable(
  "news",
  {
    id: serial("id").primaryKey().notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 2000 }).notNull(),
    status: integer("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (t) => [
    index("title_idx").on(t.title),
    index("status_idx").on(t.status),
  ]
)

export const newsletter = pgTable(
  "newsletter",
  {
    id: serial("id").primaryKey().notNull(),
    userId: varchar("userId", { length: 191 }),
    email: varchar("email", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).notNull(),
    newsletter: integer("newsletter").default(0).notNull(),
    marketing: integer("marketing").default(0).notNull(),
    transactional: integer("transactional").default(0).notNull(),
    createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  },
  (t) => [
    index("email_idx").on(t.email),
    index("userId_idx").on(t.userId),
  ]
)

export const playerName = pgTable(
  "playerName",
  {
    id: serial("id").primaryKey().notNull(),
    playerId: varchar("playerId", { length: 256 }).notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: varchar("createdAt", { length: 256 }).notNull(),
  },
  (t) => [
    index("playerId_idx").on(t.playerId),
    index("name_idx").on(t.name),
  ]
)

export const players = pgTable(
  "players",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    discordId: varchar("discordId", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    cfxId: varchar("cfxId", { length: 256 }).notNull(),
    lastLoginIp: varchar("lastLoginIp", { length: 256 }).notNull(),
    lastLoginDate: varchar("lastLoginDate", { length: 256 }).notNull(),
  },
  (t) => [
    index("name_idx").on(t.name)
  ]
)

export const servers = pgTable(
  "servers",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    ip: varchar("ip", { length: 256 }).notNull(),
    port: integer("port").notNull(),
    status: integer("status").notNull(),
    lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdDate: varchar("createdDate", { length: 256 }).notNull(),
  },
  (t) => [
    index("ip_idx").on(t.ip),
  ]
)

export const session = pgTable(
  "session",
  {
    sessionToken: varchar("sessionToken", { length: 255 }).notNull(),
    userId: varchar("userId", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "string" }).notNull(),
    device: varchar("device", { length: 255 }),
    browser: varchar("browser", { length: 255 }),
    os: varchar("os", { length: 255 }),
    location: varchar("location", { length: 255 }),
  }, (t) => [
  primaryKey({ columns: [
    t.userId, t.sessionToken
  ]}),
]);

export const supports = pgTable(
  "supports",
  {
    id: serial("id").primaryKey().notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
    message: varchar("message", { length: 256 }).notNull(),
    date: varchar("date", { length: 256 }).notNull(),
    ip: varchar("ip", { length: 256 }).notNull(),
    supportedBy: varchar("supportedBy", { length: 256 }).notNull(),
    supportedDate: varchar("supportedDate", { length: 256 }).notNull(),
    supportedIp: varchar("supportedIp", { length: 256 }).notNull(),
    supportedReason: varchar("supportedReason", { length: 256 }).notNull(),
    supportedStatus: integer("supportedStatus").notNull(),
  },
)

export const user = pgTable(
  "user",
  {
    id: uuid().primaryKey().notNull(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).notNull(),
    emailVerified: timestamp("emailVerified", {
      mode: "string",
    }).defaultNow(),
    image: varchar("image", { length: 255 }),
    role: varchar("role", { length: 255 }).default("user").notNull(),
    dob: timestamp("dob", { mode: "string" }),
  }, (t) => [
  index("email_idx").on(t.email),
  index("role_idx").on(t.role),
	pgPolicy('policy', {
		as: 'permissive',
    // to: admin,
		for: 'delete',
		using: sql``,
		withCheck: sql``,
	})],
)

export const verificationToken = pgTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).primaryKey().notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "string" }).notNull(),
  },
)

export const whitelist = pgTable(
  "whitelist",
  {
    id: serial("id").primaryKey().notNull(),
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
    approvedStatus: integer("approvedStatus").notNull(),
  },
  (t) => [
    index("discordId_idx").on(t.discordId)
  ]
)
