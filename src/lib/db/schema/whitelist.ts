import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { mysqlTable, serial, varchar, int } from "drizzle-orm/mysql-core";

export const whitelist = mysqlTable("whitelist", {
	id: serial("id").primaryKey(),
	discordId: varchar("discordId", { length: 256 }).notNull(),
	discordName: varchar("discordName", { length: 256 }).notNull(),
	steamId: varchar("steamId", { length: 256 }).notNull(),
	fiveMId: varchar("fiveMId", { length: 256 }).notNull(),
	reason: varchar("reason", { length: 256 }).notNull(), // Reason for wanting to be whitelisted
	message: varchar("message", { length: 256 }).notNull(), // Message from the user
	date: varchar("date", { length: 256 }).notNull(), // Date of submission
	ip: varchar("ip", { length: 256 }).notNull(), // IP of the user who submitted the whitelist
	approvedBy: varchar("approvedBy", { length: 256 }).notNull(), // User ID of the user who approved or denied the whitelist
	approvedDate: varchar("approvedDate", { length: 256 }).notNull(), // Date of approval or denial
	approvedIp: varchar("approvedIp", { length: 256 }).notNull(), // IP of the user who approved or denied the whitelist
	approvedReason: varchar("approvedReason", { length: 256 }).notNull(), // Reason for approval or denial
	approvedStatus: int("approvedStatus").notNull(), // Status of the whitelist => 0 = Pending, 1 = Approved, 2 = Denied
});

// Schema for CRUD - used to validate API requests
export const insertWhitelistSchema = createInsertSchema(whitelist);
export const selectWhitelistSchema = createSelectSchema(whitelist);
export const whitelistIdSchema = selectWhitelistSchema.pick({ id: true });
export const updateWhitelistSchema = selectWhitelistSchema;

export type Whitelist = z.infer<typeof selectWhitelistSchema>;
export type NewWhitelist = z.infer<typeof insertWhitelistSchema>;
export type WhitelistId = z.infer<typeof whitelistIdSchema>["id"];
