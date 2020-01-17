CREATE DATABASE IF NOT EXISTS music_directory;
USE music_directory;
CREATE TABLE IF NOT EXISTS users (
    user_id VARCHAR(36) NOT NULL PRIMARY KEY,
    email_address VARCHAR(255) NOT NULL,
    display_name VARCHAR(50) NOT NULL,
    username VARCHAR(15) NOT NULL,
    bio VARCHAR(1000) NOT NULL,
    image_url VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS artists (
    rovi_id VARCHAR(12) NOT NULL PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    notes VARCHAR(1000),
    CONSTRAINT `fk_user_id_artists`
        FOREIGN KEY (user_id) REFERENCES users (user_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS albums (
    rovi_id VARCHAR(12) NOT NULL PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    notes VARCHAR(1000),
    CONSTRAINT `fk_user_id_albums`
        FOREIGN KEY (user_id) REFERENCES users (user_id)
        ON DELETE CASCADE
);
    
CREATE TABLE IF NOT EXISTS recents (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    category INT NOT NULL
);
