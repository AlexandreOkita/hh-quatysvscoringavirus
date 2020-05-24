-- MySQL Workbench Synchronization
-- Generated: 2020-05-24 17:16
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: okita

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE TABLE IF NOT EXISTS `simoo`.`deal` (
  `iddeal` INT(11) NOT NULL AUTO_INCREMENT,
  `product_idproduct` INT(11) NOT NULL,
  `target_price` FLOAT(11) NULL DEFAULT 0,
  `actual_buyers` INT(11) NULL DEFAULT 0,
  `target_buyers` INT(11) NULL DEFAULT 0,
  `expiration` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`iddeal`),
  INDEX `fk_deal_product1_idx` (`product_idproduct` ASC),
  CONSTRAINT `fk_deal_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `simoo`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
