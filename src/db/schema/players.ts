import { relations } from "drizzle-orm"
import {
  index,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const players = mysqlTable(
  "players",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    discordId: varchar("discordId", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    cfxId: varchar("cfxId", { length: 256 }).notNull(),
    lastLoginIp: varchar("lastLoginIp", { length: 256 }).notNull(),
    lastLoginDate: varchar("lastLoginDate", { length: 256 }).notNull(),
  },
  (player) => ({
    compoundKey: primaryKey(player.id),
    nameIdx: index("name_idx").on(player.name),
  })
)

export const playersRelations = relations(players, ({ many }) => ({
  playerName: many(playerName),
}))

export const playerName = mysqlTable(
  "playerName",
  {
    id: serial("id").primaryKey(),
    playerId: varchar("playerId", { length: 256 }).notNull(),
    playerName: varchar("name", { length: 256 }).notNull(),
    createdAt: varchar("createdAt", { length: 256 }).notNull(),
  },
  (playerName) => ({
    compoundKey: primaryKey(playerName.id),
  })
)

export const playerNameRelations = relations(playerName, ({ one }) => ({
  player: one(players, {
    fields: [playerName.playerId],
    references: [players.id],
  }),
}))

// Schema for CRUD - used to validate API requests
export const insertPlayersSchema = createInsertSchema(players)
export const selectPlayersSchema = createSelectSchema(players)
export const playerIdSchema = selectPlayersSchema.pick({ id: true })
export const updatePlayersSchema = selectPlayersSchema

export type Players = z.infer<typeof selectPlayersSchema>
export type NewPlayers = z.infer<typeof insertPlayersSchema>
export type PlayerId = z.infer<typeof playerIdSchema>["id"]
