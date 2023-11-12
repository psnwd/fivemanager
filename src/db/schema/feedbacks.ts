import {
  int,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const feedbacks = mysqlTable(
  "feedbacks",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    authorName: varchar("authorName", { length: 256 }).notNull(),
    authorAvatar: varchar("authorAvatar", { length: 256 }).notNull(),
    authorJob: varchar("authorJob", { length: 256 }).notNull(),
    content: varchar("content", { length: 256 }).notNull(),
    status: int("status").notNull(),
    lastEditedBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditedAt: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdAt: varchar("createdDate", { length: 256 }).notNull(),
  },
  (feedback) => ({
    compoundKey: primaryKey(feedback.id),
  })
)

// Schema for CRUD - used to validate API requests
export const insertFeedbacksSchema = createInsertSchema(feedbacks)
export const selectFeedbacksSchema = createSelectSchema(feedbacks)
export const feedbacksIdSchema = selectFeedbacksSchema.pick({ id: true })
export const updateFeedbacksSchema = selectFeedbacksSchema

export type Feedbacks = z.infer<typeof selectFeedbacksSchema>
export type NewFeedbacks = z.infer<typeof insertFeedbacksSchema>
export type FeedbacksId = z.infer<typeof feedbacksIdSchema>["id"]
