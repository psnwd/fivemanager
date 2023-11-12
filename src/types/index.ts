export type INews = {
	id: number
	image: string
	title: string
	description: string
	status: number
	lastEditBy: string
	lastEditDate: string
	createdBy: string
	createdDate: string
}

export type IWhitelistPlayer = {
	id: string
	name: string
	steam_hex: string
	discordId: string
	status: "approved" | "waiting" | "banned"
	timestamp: string
}

export type IBanPlayer = {
	id: string
	name: string
	role: string
	discordId: string
	status: "approved" | "waiting" | "banned"
}

export type IEvent = {
	id: number;
	title: string;
	createdBy: string;
	image: string;
	description: string;
	status: number;
	lastEditBy: string;
	lastEditDate: string;
	createdDate: string;
}

export type IGiveaway = {
	id: number;
	description: string;
	type: string;
	createdBy: string;
	image: string;
	name: string;
	status: number;
	lastEditBy: string;
	lastEditDate: string;
	createdDate: string;
	totalKeys: number;
	remainingKeys: number;
	endTime: number;
	items: string;
}

export type IPlayerList = {
	id: string
	name: string
	role: string
	discordId: string
	status: "approved" | "waiting" | "banned"
}

export type IServerList = {
	id: string
	name: string
	amount: number
	status: "running" | "error" | "offline"
}