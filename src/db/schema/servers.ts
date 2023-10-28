import {
  index,
  int,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const servers = mysqlTable(
  "servers",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    ip: varchar("ip", { length: 256 }).notNull(),
    port: int("port").notNull(),
    status: int("status").notNull(),
    lastEditedBy: varchar("lastEditBy", { length: 256 }).notNull(),
    lastEditedAt: varchar("lastEditDate", { length: 256 }).notNull(),
    createdBy: varchar("createdBy", { length: 256 }).notNull(),
    createdAt: varchar("createdDate", { length: 256 }).notNull(),
  },
  (server) => ({
    compoundKey: primaryKey(server.id),
    ipIdx: index("ip_idx").on(server.ip),
  })
)

// Schema for CRUD - used to validate API requests
export const insertServersSchema = createInsertSchema(servers)
export const selectServersSchema = createSelectSchema(servers)
export const serverIdSchema = selectServersSchema.pick({ id: true })
export const updateServersSchema = selectServersSchema

export type Servers = z.infer<typeof selectServersSchema>
export type NewServers = z.infer<typeof insertServersSchema>
export type ServersId = z.infer<typeof serverIdSchema>["id"]
