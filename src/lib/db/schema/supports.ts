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
export const insertComputerSchema = createInsertSchema(supports)
export const selectComputerSchema = createSelectSchema(supports)
export const computerIdSchema = selectComputerSchema.pick({ id: true })
export const updateComputerSchema = selectComputerSchema

export type Computer = z.infer<typeof selectComputerSchema>
export type NewComputer = z.infer<typeof insertComputerSchema>
export type ComputerId = z.infer<typeof computerIdSchema>["id"]
