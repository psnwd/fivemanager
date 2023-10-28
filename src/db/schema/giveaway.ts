import {
  int,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const giveaway = mysqlTable(
  "giveaway",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: int("status").notNull(),
    type: varchar("type", {
      length: 256,
      enum: ["car", "money", "other"],
    }).notNull(),
    totalKeys: int("totalKeys").notNull(),
    remainingKeys: int("remainingKeys").notNull(),
    endTime: int("endTime").notNull(),
    items: varchar("items", { length: 256 }).notNull(),
    lastEditedBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditedAt: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdAt: varchar("createdDate", { length: 256 }).notNull(),
  },
  (giveaway) => ({
    compoundKey: primaryKey(giveaway.id),
  })
)

export const giveawayItem = mysqlTable(
  "giveawayItem",
  {
    id: serial("id").primaryKey(),
    giveawayId: int("giveawayId").notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdAt: varchar("createdDate", { length: 256 }).notNull(),
  },
  (giveawayItem) => ({
    compoundKey: primaryKey(giveawayItem.id),
  })
)

// Schema for CRUD - used to validate API requests
export const insertGiveawaySchema = createInsertSchema(giveaway)
export const selectGiveawaySchema = createSelectSchema(giveaway)
export const giveawayIdSchema = selectGiveawaySchema.pick({ id: true })
export const updateGiveawaySchema = selectGiveawaySchema

export type Giveaway = z.infer<typeof selectGiveawaySchema>
export type NewGiveaway = z.infer<typeof insertGiveawaySchema>
export type GiveawayId = z.infer<typeof giveawayIdSchema>["id"]
