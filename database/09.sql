-- MySQL Workbench Synchronization
-- Generated: 2020-05-24 13:07
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: okita

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

ALTER TABLE `simoo`.`consumer` 
CHANGE COLUMN `credit` `credit` FLOAT(11) NULL DEFAULT 50.00 ;

ALTER TABLE `simoo`.`product` 
CHANGE COLUMN `sugested_price` `original_price` FLOAT(11) NOT NULL ;

ALTER TABLE `simoo`.`consumer_wants_product` 
DROP COLUMN `price_now`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
