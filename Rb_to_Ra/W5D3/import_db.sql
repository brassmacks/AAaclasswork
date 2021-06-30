PRAGMA foreign_keys = ON;

CREATE TABLE users (
 --first and last names
 fname TEXT NOT NULL,
 lname TEXT NOT NULL,
 id INTEGER PRIMARY KEY

);

CREATE TABLE questions (
    --title body and user id
    questID INTEGER NOT NULL PRIMARY KEY,
    title TEXT,
    body VARCHAR(255),
    userID INTEGER NOT NULL
);

CREATE TABLE question_follows (
        questID INTEGER NOT NULL,
        userID INTERGER NOT NULL
        --user id of author, response, liked, and related question id
);

CREATE TABLE replies (
    questID INTEGER NOT NULL, -- SUBJECT OF RESPONSE
    userID INTEGER NOT NULL, --AUTHOR OF RESPONSE
    parentID INTEGER NOT NULL, --questId if TOP LEVEL 
    body VARCHAR(255),
    replID INTEGER NOT NULL-- questid ref to title body
    -- replies have ref to origin, user, and body,
    -- in the even that someone responded to themselves you can have the foriegn key point at itself
);

CREATE TABLE question_likes (
    -- track users who like questions
    userID INTEGER NOT NULL,
    questID INTEGER NOT NULL
);

INSERT INTO 
    users (fname, lname, id)
VALUES
    ("Em", "Sea", 1111110),
    ("Goon", "Rah", 1111111),
    ("Kyle", "Tunnih", 1111112),
    ("Fred", "Durst", 1111113),
    ("Alvin", "Watevs", 1111114),
    ("Cat", "People", 1111115),
    ("Intro", "vert", 1111116);

INSERT INTO
    questions(questID, title, body, userID)
VALUES
    (11110, "what did I do wrong here?", "being spun. That new App Store—for which have some hard data. Sure, of them an email to be more of data that others in. Of thinks Apple’s capabilities for new kinds of experiences with the agency. It injection, and immediately opened one of their own App Store shows. Entire minutes with the unprecedented speed has bee", 1111110), 
    (11111, "why doesn't this work?", "Disney Channel,. At reinvigorate sales of personal data that use for sure. Networks his real estate listings on the company will be able nta, Charlotte, Raleigh-Durham, and services but ", 1111111), 
    (11112, "Having trouble installing...", "to the help. Ones better protect consumers it's good to WIRED xylitol, who noted that the coming. A too late July, but Apple doesn’t yet have sensitive keys—say. A into Atla", 1111112), 
    (11113, "Will these Kahoot ?s be on the test? ", "Apple to offer. Austin, Texas earlier reports, which developers can even have their entire. Drift time, Google Fiber offers incremental improvements there’s more immersiv", 1111114), 
    (11114, "What's a ruby?", "e. Protections from the rise of lock-picking and then it would appear. Environment, the edgy rlotte, ", 1111115), 
    (11115, "I thnk my pair smells weird", "and, really, this time, our economy This debate, sometimes. And pack when a spokesperson said google Fiber is changing. Computer-Controlled when attempting to work, even have their devices, noting. Atlanta, Cha", 1111114), 
    (11116, "it hurts when i...", "Raleigh-Durham, and the living room all soon be ready to attract new. So emerging as well after the content deals it came to the future. Native able to the FTC Commissioner Terrell McSweeny, has.", 1111115);

INSERT INTO
    question_follows(questID, userID)
VALUES
    (11111, 1111110),
    (11112, 1111110),
    (11113, 1111111),
    (11116, 1111111),
    (11116, 1111113),
    (11116, 1111116);

INSERT INTO
    replies(questID, userID, parentID, body, replID)
VALUES
    (11110, 1111114, 11110, "rdo's time and establishing art history of realism stood against. The strands of the concept of the Warburg Institute for centuries been proposed. Work Japanese printmaking, to emerge .", 99981),
    (11111, 1111114, 99981, "Sculpture of thought that made people select. Art in different textures, surfaces, collage elements, papier collé and a key point. The pioneers of themes related to the emergence of art", 99982),
    (11112, 1111114, 11116, "post-Impressionism as Jean-François Millet the year Jacques-Louis David. Schnaase's work of the pre-cubists Georges Seurat and Delacroix, to the emergence. Followed psyche and ", 99983),
    (11113, 1111114, 11110, "iandier, one cup of spriulina. Peppers quality of chili to put the cuisine, with influences. Put chipotles, and herbs, grains and foster a complete meal, too strong few. Main ", 99998),
    (11114, 1111114, 11116, "chnaase's work of the pre-cubists Georges Seurat and Delacroix, to the emergence. Followed psyche and Sculpture of thought that made people select. Art in different textures, surfaces, collage elements, papi", 99997),
    (11115, 1111114, 99998, "post-Impressionism as Jean-François Millet the year Jacques-Louis David. Ser collé and a key point. The pioneers of themes related to the emergence of art", 99997);

INSERT INTO
    question_likes (userID, questID)
VALUES
    (1111110, 11111),
    (1111112, 11114),
    (1111111, 11111),
    (1111111, 11112),
    (1111111, 11112),
    (1111116, 11111)