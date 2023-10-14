import {
  int,
  mysqlTable,
  primaryKey,
  serial,
  text,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const events = mysqlTable(
  "events",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    images: text("images[]").notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    status: int("status").notNull(),
    lastEditedBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditedAt: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdAt: varchar("createdDate", { length: 256 }).notNull(),
  },
  (event) => ({
    compoundKey: primaryKey(event.id),
  })
)

// Schema for CRUD - used to validate API requests
export const insertEventsSchema = createInsertSchema(events)
export const selectEventsSchema = createSelectSchema(events)
export const eventsIdSchema = selectEventsSchema.pick({ id: true })
export const updateEventsSchema = selectEventsSchema

export type Events = z.infer<typeof selectEventsSchema>
export type NewEvents = z.infer<typeof insertEventsSchema>
export type EventsId = z.infer<typeof eventsIdSchema>["id"]
