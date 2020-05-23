-- MySQL Workbench Synchronization
-- Generated: 2020-05-23 18:15
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: okita

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE TABLE IF NOT EXISTS `simoo`.`product` (
  `idproduct` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `merchant_idmerchant` INT(11) NOT NULL,
  `register_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_date` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`idproduct`),
  INDEX `fk_product_merchant_idx` (`merchant_idmerchant` ASC),
  CONSTRAINT `fk_product_merchant`
    FOREIGN KEY (`merchant_idmerchant`)
    REFERENCES `simoo`.`merchant` (`idmerchant`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `simoo`.`consumer_buy_product` (
  `consumer_idconsumer` INT(11) NOT NULL,
  `product_idproduct` INT(11) NOT NULL,
  `date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`consumer_idconsumer`, `product_idproduct`),
  INDEX `fk_consumer_has_product_product1_idx` (`product_idproduct` ASC),
  INDEX `fk_consumer_has_product_consumer1_idx` (`consumer_idconsumer` ASC),
  CONSTRAINT `fk_consumer_has_product_consumer1`
    FOREIGN KEY (`consumer_idconsumer`)
    REFERENCES `simoo`.`consumer` (`idconsumer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consumer_has_product_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `simoo`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
