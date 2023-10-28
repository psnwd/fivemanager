CREATE TABLE `giveawayItem` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`giveawayId` int NOT NULL,
	`name` varchar(256) NOT NULL,
	`image` varchar(256) NOT NULL,
	`description` varchar(256) NOT NULL,
	`createdBy` varchar(256) NOT NULL,
	`createdDate` varchar(256) NOT NULL,
	CONSTRAINT `giveawayItem_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerName` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`playerId` varchar(256) NOT NULL,
	`name` varchar(256) NOT NULL,
	`createdAt` varchar(256) NOT NULL,
	CONSTRAINT `playerName_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `events` RENAME COLUMN `images` TO `image`;--> statement-breakpoint
ALTER TABLE `news` RENAME COLUMN `images` TO `image`;--> statement-breakpoint
ALTER TABLE `giveaway` ADD `image` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `giveaway` ADD `totalKeys` int NOT NULL;--> statement-breakpoint
ALTER TABLE `giveaway` ADD `remainingKeys` int NOT NULL;--> statement-breakpoint
ALTER TABLE `giveaway` ADD `endTime` int NOT NULL;--> statement-breakpoint
CREATE INDEX `email_idx` ON `newsletter` (`email`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `players` (`name`);--> statement-breakpoint
CREATE INDEX `ip_idx` ON `servers` (`ip`);--> statement-breakpoint
CREATE INDEX `discordId_idx` ON `whitelist` (`discordId`);