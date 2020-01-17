USE music_directory;

INSERT INTO users VALUES
    ("U1", "user1@email.com", "user 1", "user_1", "something about me", "https://i.ytimg.com/vi/ZDEVut4j7eU/maxresdefault.jpg"),
    ("U2", "user2@email.com", "user 2", "user_2", "something about 2", "https://i.ytimg.com/vi/ZDEVut4j7eU/maxresdefault.jpg");

INSERT INTO artists (rovi_id, user_id, notes) VALUES
    ("MN0000114342", "U1", "Love them");

INSERT INTO albums (rovi_id, user_id, notes) VALUES
    ("MW0000056882", "U1", "Love this one");

INSERT INTO recents (text, category) VALUES
    ("The Bee Gees", "search_term");

INSERT INTO recents (rovi_or_user_id, text, category) VALUES 
    ("MN0000114342", "The Beatles", "artist");
