-- AlterTable
ALTER TABLE `verificationtoken` ADD PRIMARY KEY (`identifier`, `token`);

-- DropIndex
DROP INDEX `VerificationToken_identifier_token_key` ON `verificationtoken`;
