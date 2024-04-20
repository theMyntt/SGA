DROP DATABASE IF EXISTS USERS;

CREATE DATABASE IF NOT EXISTS USERS;

USE USERS;

CREATE TABLE SCHOOL_INFORMATION (
	ID_SCHOOL VARCHAR(255) NOT NULL,
    SCHOOL_CODE BIGINT NOT NULL,
    NAME_SCHOOL VARCHAR(100) NOT NULL,
    CELLPHONE_SCHOOL VARCHAR(11) NOT NULL,
    PRIMARY KEY (ID_SCHOOL),
    UNIQUE (SCHOOL_CODE)
);

CREATE TABLE SUBJECT_INFO (
    ID_SUBJECT VARCHAR(255) NOT NULL,
    NAME_SUBJECT VARCHAR(100) NOT NULL,
    PRIMARY KEY (ID_SUBJECT)
);

CREATE TABLE USER_INFORMATION (
	ID_USER VARCHAR(255) NOT NULL,
    EMAIL_USER VARCHAR(90) NOT NULL,
    PASSWORD_USER VARCHAR(255) NOT NULL,
    CELLPHONE_USER VARCHAR(11),
    CPF_USER VARCHAR(11) NOT NULL,
    RG_USER VARCHAR(9) NOT NULL,
    STATE_RG_USER VARCHAR(7) NOT NULL,
    FIRST_NAME_USER VARCHAR(80) NOT NULL,
    LAST_NAME_USER VARCHAR(80) NOT NULL,
    SCHOOL_ID_SCHOOL VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID_USER),
    UNIQUE(EMAIL_USER),
    FOREIGN KEY (SCHOOL_ID_SCHOOL) REFERENCES SCHOOL_INFORMATION(ID_SCHOOL)
);

CREATE TABLE USER_MESSAGES (
    ID_MESSAGES VARCHAR(255) NOT NULL,
    USER_ID_USER VARCHAR(255) NOT NULL,
    SUBJECT_MESSAGE_USER VARCHAR(255) NOT NULL,
    MESSAGE_USER VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID_MESSAGES),
    FOREIGN KEY (USER_ID_USER) REFERENCES USER_INFORMATION(ID_USER)
);

CREATE TABLE USER_MENTION (
    ID_MENTION VARCHAR(255) NOT NULL,
    GRADE_MENTION CHAR(2) NOT NULL,
    SUBJECT_ID_SUBJECT VARCHAR(255) NOT NULL,
    SCHOOL_ID_SCHOOL VARCHAR(255) NOT NULL,
    USER_ID_USER VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID_MENTION),
    FOREIGN KEY (SUBJECT_ID_SUBJECT) REFERENCES SUBJECT_INFO(ID_SUBJECT),
    FOREIGN KEY (SCHOOL_ID_SCHOOL) REFERENCES SCHOOL_INFORMATION(ID_SCHOOL),
    FOREIGN KEY (USER_ID_USER) REFERENCES USER_INFORMATION(ID_USER)
);

INSERT INTO SCHOOL_INFORMATION(ID_SCHOOL, NAME_SCHOOL, CELLPHONE_SCHOOL, SCHOOL_CODE) VALUES
	("s0ggbegy2eblp93-j63jfy5d2gmj010-exb2rz9usdkigh5-bliu6apya2v7e7r", "E.E Test", "11990000000", 1197907091);

SELECT * 
FROM USER_INFORMATION;