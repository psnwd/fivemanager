ALTER TABLE `events` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `feedbacks` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `giveaway` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `newsletter` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `players` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `servers` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `session` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `supports` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `user` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `verificationToken` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `whitelist` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `newsletter` boolean NOT NULL;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `newsletter` boolean NOT NULL DEFAULT false;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `marketing` boolean NOT NULL;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `marketing` boolean NOT NULL DEFAULT false;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `transactional` boolean NOT NULL;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `transactional` boolean NOT NULL DEFAULT false;--> statement-breakpoint
ALTER TABLE `newsletter` MODIFY COLUMN `createdAt` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `emailVerified` timestamp(3) DEFAULT (now());--> statement-breakpoint
ALTER TABLE `events` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `feedbacks` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `giveaway` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `newsletter` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `players` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `servers` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `session` ADD PRIMARY KEY(`sessionToken`);--> statement-breakpoint
ALTER TABLE `supports` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `user` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `verificationToken` ADD PRIMARY KEY(`identifier`,`token`);--> statement-breakpoint
ALTER TABLE `whitelist` ADD PRIMARY KEY(`id`);