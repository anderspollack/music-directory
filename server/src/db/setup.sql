CREATE DATABASE IF NOT EXISTS music_directory;
USE music_directory;
CREATE TABLE IF NOT EXISTS users (
    user_id VARCHAR(36) NOT NULL PRIMARY KEY,
    email_address VARCHAR(255) NOT NULL,
    display_name VARCHAR(50) NOT NULL,
    username VARCHAR(15) NOT NULL,
    bio VARCHAR(1000) NOT NULL,
    image_url VARCHAR(200) NULL
);

CREATE TABLE IF NOT EXISTS artists (
    artist_id INT NOT NULL auto_increment PRIMARY KEY,
    rovi_id VARCHAR(12) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    notes VARCHAR(1000) NULL,
    CONSTRAINT `fk_user_id_artists`
        FOREIGN KEY (user_id) REFERENCES users (user_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS albums (
    album_id INT NOT NULL auto_increment PRIMARY KEY,
    rovi_id VARCHAR(12) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    notes VARCHAR(1000) NULL,
    CONSTRAINT `fk_user_id_albums`
        FOREIGN KEY (user_id) REFERENCES users (user_id)
        ON DELETE CASCADE
);
    
CREATE TABLE IF NOT EXISTS recents (
    recent_id INT NOT NULL auto_increment PRIMARY KEY,
    rovi_or_user_id VARCHAR(36) NULL,
    text VARCHAR(100) NOT NULL,
    image_url VARCHAR(200) NULL,
    category ENUM('user', 'artist', 'album', 'search_term') NOT NULL
);
