CREATE TABLE `account` (
	`userId` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`provider` varchar(255) NOT NULL,
	`providerAccountId` varchar(255) NOT NULL,
	`refresh_token` varchar(255),
	`access_token` varchar(255),
	`expires_at` int,
	`token_type` varchar(255),
	`scope` varchar(255),
	`id_token` text,
	`session_state` varchar(255),
	CONSTRAINT `account_provider_providerAccountId` PRIMARY KEY(`provider`,`providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`sessionToken` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `session_sessionToken` PRIMARY KEY(`sessionToken`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`emailVerified` timestamp(3) DEFAULT (now()),
	`image` varchar(255),
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `verificationToken_identifier_token` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
CREATE TABLE `events` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`images[]` text NOT NULL,
	`description` varchar(256) NOT NULL,
	`status` int NOT NULL,
	`lastEditBy` varchar(256) NOT NULL,
	`lastEditDate` varchar(256) NOT NULL,
	`createdBy` varchar(256) NOT NULL,
	`createdDate` varchar(256) NOT NULL,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `feedbacks` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`authorJob` varchar(256) NOT NULL,
	`avatar` varchar(256) NOT NULL,
	`content` varchar(256) NOT NULL,
	`status` int NOT NULL,
	`lastEditBy` varchar(256) NOT NULL,
	`lastEditDate` varchar(256) NOT NULL,
	`createdBy` varchar(256) NOT NULL,
	`createdDate` varchar(256) NOT NULL,
	CONSTRAINT `feedbacks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `giveaway` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`type` varchar(256) NOT NULL,
	`description` varchar(256) NOT NULL,
	`status` int NOT NULL,
	`items` varchar(256) NOT NULL,
	`lastEditBy` varchar(256) NOT NULL,
	`lastEditDate` varchar(256) NOT NULL,
	`createdBy` varchar(256) NOT NULL,
	`createdDate` varchar(256) NOT NULL,
	CONSTRAINT `giveaway_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `newsletter` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`userId` varchar(191),
	`email` varchar(191) NOT NULL,
	`token` varchar(191) NOT NULL,
	`newsletter` boolean NOT NULL DEFAULT false,
	`marketing` boolean NOT NULL DEFAULT false,
	`transactional` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `newsletter_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`discordId` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`cfxId` varchar(256) NOT NULL,
	`lastLoginIp` varchar(256) NOT NULL,
	`lastLoginDate` varchar(256) NOT NULL,
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `servers` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`ip` varchar(256) NOT NULL,
	`port` int NOT NULL,
	`status` int NOT NULL,
	`lastEditBy` varchar(256) NOT NULL,
	`lastEditDate` varchar(256) NOT NULL,
	`createdBy` varchar(256) NOT NULL,
	`createdDate` varchar(256) NOT NULL,
	CONSTRAINT `servers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `supports` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`userId` varchar(256) NOT NULL,
	`message` varchar(256) NOT NULL,
	`date` varchar(256) NOT NULL,
	`ip` varchar(256) NOT NULL,
	`supportedBy` varchar(256) NOT NULL,
	`supportedDate` varchar(256) NOT NULL,
	`supportedIp` varchar(256) NOT NULL,
	`supportedReason` varchar(256) NOT NULL,
	`supportedStatus` int NOT NULL,
	CONSTRAINT `supports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `whitelist` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`discordId` varchar(256) NOT NULL,
	`discordName` varchar(256) NOT NULL,
	`steamId` varchar(256) NOT NULL,
	`fiveMId` varchar(256) NOT NULL,
	`reason` varchar(256) NOT NULL,
	`message` varchar(256) NOT NULL,
	`date` varchar(256) NOT NULL,
	`ip` varchar(256) NOT NULL,
	`approvedBy` varchar(256) NOT NULL,
	`approvedDate` varchar(256) NOT NULL,
	`approvedIp` varchar(256) NOT NULL,
	`approvedReason` varchar(256) NOT NULL,
	`approvedStatus` int NOT NULL,
	CONSTRAINT `whitelist_id` PRIMARY KEY(`id`)
);
