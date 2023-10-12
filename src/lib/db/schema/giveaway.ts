import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const giveaway = mysqlTable("giveaway", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  type: varchar("type", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  status: int("status").notNull(),
  items: varchar("items", { length: 256 }).notNull(),
  lastEditedBy: varchar("lastEditBy", { length: 256 }).notNull(),
  lastEditedAt: varchar("lastEditDate", { length: 256 }).notNull(),
  createdBy: varchar("createdBy", { length: 256 }).notNull(),
  createdAt: varchar("createdDate", { length: 256 }).notNull(),
})

// Schema for CRUD - used to validate API requests
export const insertGiveawaySchema = createInsertSchema(giveaway)
export const selectGiveawaySchema = createSelectSchema(giveaway)
export const giveawayIdSchema = selectGiveawaySchema.pick({ id: true })
export const updateGiveawaySchema = selectGiveawaySchema

export type Giveaway = z.infer<typeof selectGiveawaySchema>
export type NewGiveaway = z.infer<typeof insertGiveawaySchema>
export type GiveawayId = z.infer<typeof giveawayIdSchema>["id"]
