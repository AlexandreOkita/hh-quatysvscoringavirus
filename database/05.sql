-- MySQL Workbench Synchronization
-- Generated: 2020-05-24 01:21
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: okita

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

ALTER TABLE `simoo`.`product` 
ADD COLUMN `image` VARCHAR(100) NULL DEFAULT NULL AFTER `minimum_price`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
