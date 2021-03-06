﻿-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/eAJcyQ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE `Users` (
    `UserID` string  NOT NULL ,
    `Username` varchar(15)  NOT NULL ,
    `DisplayName` varchar(50)  NOT NULL ,
    `Bio` varchar(200)  NOT NULL ,
    `ImageURL` string  NOT NULL ,
    PRIMARY KEY (
        `UserID`
    ),
    CONSTRAINT `uc_Users_Username` UNIQUE (
        `Username`
    )
);

CREATE TABLE `Artists` (
    `ArtistID` int  NOT NULL ,
    `UserID` string  NOT NULL ,
    `RoviID` string  NOT NULL ,
    `Notes` varchar(10000)  NOT NULL ,
    PRIMARY KEY (
        `ArtistID`
    ),
    CONSTRAINT `uc_Artists_RoviID` UNIQUE (
        `RoviID`
    )
);

CREATE TABLE `RecentSearches` (
    `SearchID` int AUTO_INCREMENT NOT NULL ,
    `SearchTerm` string  NOT NULL ,
    `UserID` string  NOT NULL ,
    `SearchTimestamp` number  NOT NULL ,
    PRIMARY KEY (
        `SearchID`
    )
);

CREATE TABLE `RecentArtists` (
    `ArtistID` int  NOT NULL ,
    `UserID` string  NOT NULL ,
    `ArtistName` string  NOT NULL ,
    `RoviID` string  NOT NULL ,
    PRIMARY KEY (
        `ArtistID`
    ),
    CONSTRAINT `uc_RecentArtists_RoviID` UNIQUE (
        `RoviID`
    )
);

CREATE TABLE `RecentUsers` (
    `RecentID` int AUTO_INCREMENT NOT NULL ,
    `UserID` string  NOT NULL ,
    `RecentUserID` string  NOT NULL ,
    PRIMARY KEY (
        `RecentID`
    )
);

ALTER TABLE `Artists` ADD CONSTRAINT `fk_Artists_UserID` FOREIGN KEY(`UserID`)
REFERENCES `Users` (`UserID`);

ALTER TABLE `RecentSearches` ADD CONSTRAINT `fk_RecentSearches_UserID` FOREIGN KEY(`UserID`)
REFERENCES `Users` (`UserID`);

ALTER TABLE `RecentArtists` ADD CONSTRAINT `fk_RecentArtists_UserID` FOREIGN KEY(`UserID`)
REFERENCES `Users` (`UserID`);

ALTER TABLE `RecentUsers` ADD CONSTRAINT `fk_RecentUsers_UserID` FOREIGN KEY(`UserID`)
REFERENCES `Users` (`UserID`);

ALTER TABLE `RecentUsers` ADD CONSTRAINT `fk_RecentUsers_RecentUserID` FOREIGN KEY(`RecentUserID`)
REFERENCES `Users` (`UserID`);

