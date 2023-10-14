import { mysqlTable, primaryKey, serial, varchar } from "drizzle-orm/mysql-core"
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
  })
)

// Schema for CRUD - used to validate API requests
export const insertPlayersSchema = createInsertSchema(players)
export const selectPlayersSchema = createSelectSchema(players)
export const playerIdSchema = selectPlayersSchema.pick({ id: true })
export const updatePlayersSchema = selectPlayersSchema

export type Players = z.infer<typeof selectPlayersSchema>
export type NewPlayers = z.infer<typeof insertPlayersSchema>
export type PlayerId = z.infer<typeof playerIdSchema>["id"]
