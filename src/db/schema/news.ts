import {
  int,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const news = mysqlTable(
  "news",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
    description: varchar("description", { length: 2000 }).notNull(),
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
export const insertNewsSchema = createInsertSchema(news)
export const selectNewsSchema = createSelectSchema(news)
export const newsIdSchema = selectNewsSchema.pick({ id: true })
export const updateNewsSchema = selectNewsSchema

export type News = z.infer<typeof selectNewsSchema>
export type NewNews = z.infer<typeof insertNewsSchema>
export type NewsId = z.infer<typeof newsIdSchema>["id"]
