CREATE DATABASE IF NOT EXISTS `farmingInAnutshell`;
USE farmingInAnutshell;
    CREATE TABLE IF NOT EXISTS `User` (
        `IdUser` INTEGER UNIQUE AUTO_INCREMENT,
        `pseudo` VARCHAR(25) UNIQUE,
        `email` VARCHAR(50) UNIQUE,
        `mdp` VARCHAR(100),
        `privilege` VARCHAR(25),
        PRIMARY KEY(IdUser));
    
    CREATE TABLE IF NOT EXISTS `Perso` (
        `IdPerso` INTEGER UNIQUE AUTO_INCREMENT,
	`id_user` INTEGER,
        `name` VARCHAR(25),
        `baseLife` INTEGER,
        `baseAtt` INTEGER,
        `baseDef` INTEGER,
        `baseCrit` INTEGER,
        `baseDodg` INTEGER,
        `level` INTEGER,
        `golds` INTEGER,
	`worldMax` INTEGER,
	`xp` INTEGER,
	`status` VARCHAR(255),
        `urlPerso` VARCHAR(50) ,
        Foreign KEY (id_user) REFERENCES User(IdUser));
    
    CREATE TABLE IF NOT EXISTS `Equipement` (
        `IdEquip` INTEGER UNIQUE AUTO_INCREMENT,
        `name` VARCHAR(25),
	`type` VARCHAR(25),
        `life` INTEGER, 
        `att` INTEGER, 
        `def` INTEGER, 
        `crit` INTEGER, 
        `dodg` INTEGER,
        `urlIcon` VARCHAR(150) ,
	`description` VARCHAR(255) ,
        PRIMARY KEY(IdEquip));

    CREATE TABLE IF NOT EXISTS `LienEquip` (
        `IdLienEquip` INTEGER UNIQUE AUTO_INCREMENT,
        `id_equip`INTEGER,
        `id_perso` INTEGER, 
        `rarity` VARCHAR(50),
	`cost` INTEGER,
        `location` TINYINT(1) ,
        PRIMARY KEY(IdLienEquip),
        Foreign KEY (id_equip) REFERENCES Equipement(IdEquip),
        Foreign KEY (id_perso) REFERENCES Perso(IdPerso));

    CREATE TABLE IF NOT EXISTS `Skill` (
        `IdSkill` INTEGER UNIQUE AUTO_INCREMENT,
        `powers` VARCHAR(500),
        `descPowers` VARCHAR(500),
        `roll` INTEGER,
        `class` VARCHAR(25),
        `urlIcon` VARCHAR(50) ,
        PRIMARY KEY(IdSkill));

    CREATE TABLE IF NOT EXISTS `LienSkill` (
        `IdLienSkill` INTEGER UNIQUE AUTO_INCREMENT,
        `id_skill` INTEGER,
        `id_perso` INTEGER, 
        PRIMARY KEY(IdLienSkill),
        Foreign KEY (id_skill) REFERENCES Skill(IdSkill),
        Foreign KEY (id_perso) REFERENCES Perso(IdPerso));

    CREATE TABLE IF NOT EXISTS `Expendable` (
        `IdExpendable` INTEGER UNIQUE AUTO_INCREMENT,
        `name` VARCHAR(25),
        `healValue` INTEGER,
	`attValue` INTEGER,
	`defValue` INTEGER,
	`critValue` INTEGER,
        `dodgeValue` INTEGER,
	`rarity` VARCHAR(25),
        `urlIcon` VARCHAR(150) ,
	`id_perso` INTEGER,
	Foreign KEY (id_perso) REFERENCES Perso(IdPerso),
        PRIMARY KEY(IdExpendable));

CREATE TABLE IF NOT EXISTS BuyableExpendable (
        IdBuyableExpendable INTEGER UNIQUE AUTO_INCREMENT,
	`name` VARCHAR(25),
        `healValue` INTEGER,
	`attValue` INTEGER,
	`defValue` INTEGER,
	`critValue` INTEGER,
        `dodgeValue` INTEGER,
	`rarity` VARCHAR(25),
	`descEffects` VARCHAR(500),
        `urlIcon` VARCHAR(150) ,
        PRIMARY KEY(IdBuyableExpendable));

    CREATE TABLE IF NOT EXISTS LienExpendable (
        IdLienExpendable INTEGER UNIQUE AUTO_INCREMENT,
        id_expendable INTEGER,
        id_perso INTEGER, 
        PRIMARY KEY(IdLienExpendable),
        Foreign KEY (id_expendable) REFERENCES BuyableExpendable(IdBuyableExpendable),
        Foreign KEY (id_perso) REFERENCES Perso(IdPerso));

    CREATE TABLE IF NOT EXISTS `world` (
        `IdWorld` INTEGER UNIQUE AUTO_INCREMENT,
        `descr` VARCHAR(500),
        `level` INTEGER);

    CREATE TABLE IF NOT EXISTS `monster` (
        `Idmonster` INTEGER UNIQUE AUTO_INCREMENT,
        `name` VARCHAR(25),
        `life` INTEGER,
        `att` INTEGER,
        `def` INTEGER,
        `crit` INTEGER,
        `dodg` INTEGER,
        `urlMonster` VARCHAR(50));

    CREATE TABLE IF NOT EXISTS `LienMonster` (
        `IdLienMonster` INTEGER UNIQUE AUTO_INCREMENT,
        `id_world` INTEGER,
        `id_monster` INTEGER,
	`type` VARCHAR(25), 
        PRIMARY KEY(IdLienMonster),
        Foreign KEY (id_world) REFERENCES world(IdWorld),
        Foreign KEY (id_monster) REFERENCES monster(Idmonster));
    
/*	CREATE TRIGGER `after_user_insert` AFTER INSERT ON `User` FOR EACH ROW INSERT IGNORE INTO Perso (id_user,name,baseLife,baseAtt,baseDef,baseCrit,baseDodg,level,golds) VALUES (new.idUser,new.pseudo,150,15,10,0,0,1,50000);

CREATE TRIGGER `after_perso_insert` AFTER INSERT ON `Perso`
 FOR EACH ROW BEGIN

CREATE TRIGGER `after_perso_insert` AFTER INSERT ON `Perso` FOR EACH ROW BEGIN INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (43,new.IdPerso,"Common",1,1); INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (44,new.IdPerso,"Common",1,1); INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (45,new.IdPerso,"Common",1,1); INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (46,new.IdPerso,"Common",1,1); INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (47,new.IdPerso,"Common",1,1); INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (48,new.IdPerso,"Common",1,1); END 
*/

--
-- Triggers `Perso`
--
DELIMITER $$
CREATE TRIGGER `after_perso_insert` AFTER INSERT ON `Perso` FOR EACH ROW BEGIN

INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (43,new.IdPerso,"Common",1,1);
INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (44,new.IdPerso,"Common",1,1);
INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (45,new.IdPerso,"Common",1,1);
INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (46,new.IdPerso,"Common",1,1);
INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (47,new.IdPerso,"Common",1,1);
INSERT IGNORE INTO LienEquip(`id_equip`, `id_perso`, `rarity`, `cost`, `location`) VALUES (48,new.IdPerso,"Common",1,1);

END
$$
DELIMITER ;

-- --------------------------------------------------------
--
-- Triggers `User`
--
DELIMITER $$
CREATE TRIGGER `after_user_insert` AFTER INSERT ON `User` FOR EACH ROW BEGIN
	INSERT IGNORE INTO Perso (id_user,name,baseLife,baseAtt,baseDef,baseCrit,baseDodg,level,golds, worldMax, xp) VALUES (new.idUser,new.pseudo,150,15,10,0,0,1,500,1,0);

END
$$
DELIMITER ;

-- --------------------------------------------------------

    
