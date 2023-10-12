import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const supports = mysqlTable("supports", {
  id: serial("id").primaryKey(),
  userId: varchar("userId", { length: 256 }).notNull(),
  message: varchar("message", { length: 256 }).notNull(),
  date: varchar("date", { length: 256 }).notNull(),
  ip: varchar("ip", { length: 256 }).notNull(),
  supportedBy: varchar("supportedBy", { length: 256 }).notNull(),
  supportedDate: varchar("supportedDate", { length: 256 }).notNull(),
  supportedIp: varchar("supportedIp", { length: 256 }).notNull(),
  supportedReason: varchar("supportedReason", { length: 256 }).notNull(),
  supportedStatus: int("supportedStatus").notNull(),
})

// Schema for CRUD - used to validate API requests
export const insertSupportSchema = createInsertSchema(supports)
export const selectSupportSchema = createSelectSchema(supports)
export const supportIdSchema = selectSupportSchema.pick({ id: true })
export const updateSupportSchema = selectSupportSchema

export type Support = z.infer<typeof selectSupportSchema>
export type NewSupport = z.infer<typeof insertSupportSchema>
export type SupportId = z.infer<typeof supportIdSchema>["id"]
