ALTER TABLE `user` MODIFY COLUMN `role` varchar(255) NOT NULL DEFAULT 'user';--> statement-breakpoint
ALTER TABLE `session` ADD `device` varchar(255);--> statement-breakpoint
ALTER TABLE `session` ADD `browser` varchar(255);--> statement-breakpoint
ALTER TABLE `session` ADD `os` varchar(255);--> statement-breakpoint
ALTER TABLE `session` ADD `location` varchar(255);--> statement-breakpoint
ALTER TABLE `user` ADD `dob` timestamp;