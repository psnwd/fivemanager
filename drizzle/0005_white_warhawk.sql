ALTER TABLE `feedbacks` RENAME COLUMN `avatar` TO `authorName`;--> statement-breakpoint
ALTER TABLE `feedbacks` ADD `authorAvatar` varchar(256) NOT NULL;