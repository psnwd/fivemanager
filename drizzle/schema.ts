import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, varchar, int, text, serial, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const account = mysqlTable("account", {
	userId: varchar("userId", { length: 255 }).notNull(),
	type: varchar("type", { length: 255 }).notNull(),
	provider: varchar("provider", { length: 255 }).notNull(),
	providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
	refreshToken: varchar("refresh_token", { length: 255 }),
	accessToken: varchar("access_token", { length: 255 }),
	expiresAt: int("expires_at"),
	tokenType: varchar("token_type", { length: 255 }),
	scope: varchar("scope", { length: 255 }),
	idToken: text("id_token"),
	sessionState: varchar("session_state", { length: 255 }),
},
(table) => {
	return {
		accountProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const events = mysqlTable("events", {
	id: serial("id").notNull(),
	title: varchar("title", { length: 256 }).notNull(),
	images[]: text("images[]").notNull(),
	description: varchar("description", { length: 256 }).notNull(),
	status: int("status").notNull(),
	lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
	lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
	createdBy: varchar("createdBy", { length: 256 }).notNull(),
	createdDate: varchar("createdDate", { length: 256 }).notNull(),
},
(table) => {
	return {
		eventsProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const feedbacks = mysqlTable("feedbacks", {
	id: serial("id").notNull(),
	title: varchar("title", { length: 256 }).notNull(),
	authorJob: varchar("authorJob", { length: 256 }).notNull(),
	avatar: varchar("avatar", { length: 256 }).notNull(),
	content: varchar("content", { length: 256 }).notNull(),
	status: int("status").notNull(),
	lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
	lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
	createdBy: varchar("createdBy", { length: 256 }).notNull(),
	createdDate: varchar("createdDate", { length: 256 }).notNull(),
},
(table) => {
	return {
		feedbacksProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const giveaway = mysqlTable("giveaway", {
	id: serial("id").notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	type: varchar("type", { length: 256 }).notNull(),
	description: varchar("description", { length: 256 }).notNull(),
	status: int("status").notNull(),
	items: varchar("items", { length: 256 }).notNull(),
	lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
	lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
	createdBy: varchar("createdBy", { length: 256 }).notNull(),
	createdDate: varchar("createdDate", { length: 256 }).notNull(),
},
(table) => {
	return {
		giveawayProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const players = mysqlTable("players", {
	id: serial("id").notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	discordId: varchar("discordId", { length: 256 }).notNull(),
	email: varchar("email", { length: 256 }).notNull(),
	cfxId: varchar("cfxId", { length: 256 }).notNull(),
	lastLoginIp: varchar("lastLoginIp", { length: 256 }).notNull(),
	lastLoginDate: varchar("lastLoginDate", { length: 256 }).notNull(),
},
(table) => {
	return {
		playersProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const servers = mysqlTable("servers", {
	id: serial("id").notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	ip: varchar("ip", { length: 256 }).notNull(),
	port: int("port").notNull(),
	status: int("status").notNull(),
	lastEditBy: varchar("lastEditBy", { length: 256 }).notNull(),
	lastEditDate: varchar("lastEditDate", { length: 256 }).notNull(),
	createdBy: varchar("createdBy", { length: 256 }).notNull(),
	createdDate: varchar("createdDate", { length: 256 }).notNull(),
},
(table) => {
	return {
		serversProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const session = mysqlTable("session", {
	sessionToken: varchar("sessionToken", { length: 255 }).notNull(),
	userId: varchar("userId", { length: 255 }).notNull(),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
},
(table) => {
	return {
		sessionProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const supports = mysqlTable("supports", {
	id: serial("id").notNull(),
	userId: varchar("userId", { length: 256 }).notNull(),
	message: varchar("message", { length: 256 }).notNull(),
	date: varchar("date", { length: 256 }).notNull(),
	ip: varchar("ip", { length: 256 }).notNull(),
	supportedBy: varchar("supportedBy", { length: 256 }).notNull(),
	supportedDate: varchar("supportedDate", { length: 256 }).notNull(),
	supportedIp: varchar("supportedIp", { length: 256 }).notNull(),
	supportedReason: varchar("supportedReason", { length: 256 }).notNull(),
	supportedStatus: int("supportedStatus").notNull(),
},
(table) => {
	return {
		supportsProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const user = mysqlTable("user", {
	id: varchar("id", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull(),
	emailVerified: timestamp("emailVerified", { fsp: 3, mode: 'string' }).defaultNow(),
	image: varchar("image", { length: 255 }),
},
(table) => {
	return {
		userProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const verificationToken = mysqlTable("verificationToken", {
	identifier: varchar("identifier", { length: 255 }).notNull(),
	token: varchar("token", { length: 255 }).notNull(),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
},
(table) => {
	return {
		verificationTokenProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});

export const whitelist = mysqlTable("whitelist", {
	id: serial("id").notNull(),
	discordId: varchar("discordId", { length: 256 }).notNull(),
	discordName: varchar("discordName", { length: 256 }).notNull(),
	steamId: varchar("steamId", { length: 256 }).notNull(),
	fiveMid: varchar("fiveMId", { length: 256 }).notNull(),
	reason: varchar("reason", { length: 256 }).notNull(),
	message: varchar("message", { length: 256 }).notNull(),
	date: varchar("date", { length: 256 }).notNull(),
	ip: varchar("ip", { length: 256 }).notNull(),
	approvedBy: varchar("approvedBy", { length: 256 }).notNull(),
	approvedDate: varchar("approvedDate", { length: 256 }).notNull(),
	approvedIp: varchar("approvedIp", { length: 256 }).notNull(),
	approvedReason: varchar("approvedReason", { length: 256 }).notNull(),
	approvedStatus: int("approvedStatus").notNull(),
},
(table) => {
	return {
		whitelistProviderProviderAccountId: primaryKey(table.provider, table.providerAccountId),
	}
});