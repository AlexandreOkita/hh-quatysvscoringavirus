-- MySQL Workbench Synchronization
-- Generated: 2020-05-24 13:04
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: okita

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

ALTER TABLE `simoo`.`consumer` 
CHANGE COLUMN `credit` `credit` FLOAT(11) NULL DEFAULT 50.00 ;

CREATE TABLE IF NOT EXISTS `simoo`.`consumer_wants_product` (
  `product_idproduct` INT(11) NOT NULL,
  `consumer_idconsumer` INT(11) NOT NULL,
  `price_now` FLOAT(11) NULL DEFAULT 0,
  PRIMARY KEY (`product_idproduct`, `consumer_idconsumer`),
  INDEX `fk_product_has_consumer_consumer1_idx` (`consumer_idconsumer` ASC),
  INDEX `fk_product_has_consumer_product1_idx` (`product_idproduct` ASC),
  CONSTRAINT `fk_product_has_consumer_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `simoo`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_consumer_consumer1`
    FOREIGN KEY (`consumer_idconsumer`)
    REFERENCES `simoo`.`consumer` (`idconsumer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
