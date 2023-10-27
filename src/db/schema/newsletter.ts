import {
  boolean,
  index,
  mysqlTable,
  primaryKey,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const newsletter = mysqlTable(
  "newsletter",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 191 }),
    email: varchar("email", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).notNull(),
    newsletter: boolean("newsletter").notNull().default(false),
    marketing: boolean("marketing").notNull().default(false),
    transactional: boolean("transactional").notNull().default(false),
    createdAt: timestamp("createdAt").defaultNow(),
  },
  (newsletter) => ({
    compoundKey: primaryKey(newsletter.id),
    emailIdx: index("email_idx").on(newsletter.email),
  })
)

// Schema for CRUD - used to validate API requests
export const insertNewsletterSchema = createInsertSchema(newsletter)
export const selectNewsletterSchema = createSelectSchema(newsletter)
export const newsletterIdSchema = selectNewsletterSchema.pick({ id: true })
export const updateNewsletterSchema = selectNewsletterSchema

export type Newsletter = z.infer<typeof selectNewsletterSchema>
export type NewNewsletter = z.infer<typeof insertNewsletterSchema>
export type NewsletterId = z.infer<typeof newsletterIdSchema>["id"]
