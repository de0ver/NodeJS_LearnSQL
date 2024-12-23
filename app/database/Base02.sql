/******************************************************************************/
/****         Generated by IBExpert 2006.12.13 20.12.2016 22:18:17         ****/
/******************************************************************************/

SET SQL DIALECT 3;

SET NAMES WIN1251;

CREATE DATABASE 'A:/Base02.fdb'
USER 'SYSDBA' PASSWORD 'masterkey'
PAGE_SIZE 1024
DEFAULT CHARACTER SET WIN1251;



/******************************************************************************/
/****                               Domains                                ****/
/******************************************************************************/

CREATE DOMAIN CITIES AS
VARCHAR(20);

CREATE DOMAIN COMMS AS
DECIMAL(15,2)
CHECK (value between 0 and 1);

CREATE DOMAIN DATES AS
DATE;

CREATE DOMAIN FKEYS AS
INTEGER;

CREATE DOMAIN MONEY AS
DECIMAL(15,2);

CREATE DOMAIN "NAMES" AS
VARCHAR(20);

CREATE DOMAIN PKEYS AS
INTEGER
NOT NULL;

CREATE DOMAIN RATING AS
INTEGER;



/******************************************************************************/
/****                                Tables                                ****/
/******************************************************************************/



CREATE TABLE CITIES (
    CITNUM  PKEYS NOT NULL,
    CITY    CITIES,
    STANUM  FKEYS
);


CREATE TABLE CUSTOMERS (
    CUSNUM   PKEYS NOT NULL,
    CUSNAME  "NAMES",
    CITNUM   FKEYS,
    RATING   RATING,
    SALNUM   FKEYS
);


CREATE TABLE ORDERS (
    ORDNUM   PKEYS NOT NULL,
    AMT      MONEY,
    ORDDATE  DATES,
    CUSNUM   FKEYS,
    SALNUM   FKEYS
);


CREATE TABLE SALESPEOPLE (
    SALNUM   PKEYS NOT NULL,
    SALNAME  "NAMES",
    CITNUM   FKEYS,
    COMM     COMMS
);


CREATE TABLE STATUSES (
    STANUM  PKEYS NOT NULL,
    STATUS  "NAMES"
);


INSERT INTO STATUSES (STANUM, STATUS) VALUES (4001, '�����');
INSERT INTO STATUSES (STANUM, STATUS) VALUES (4002, '�������');
INSERT INTO STATUSES (STANUM, STATUS) VALUES (4003, '����');
INSERT INTO STATUSES (STANUM, STATUS) VALUES (4004, '�������');

COMMIT WORK;

INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5002, '�������', 4001);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5003, '������', 4002);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5004, '����������-���������', 4001);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5006, '������', 4001);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5007, '�������', 4001);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5008, '���������', 4001);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5005, '���������-���������', 4001);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5001, '������� ����', 4003);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5009, '�������-���������', NULL);
INSERT INTO CITIES (CITNUM, CITY, STANUM) VALUES (5010, '���������', NULL);

COMMIT WORK;

INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1001, '�������� � �', 5007, 0.12);
INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1002, '������� � �', 5006, 0.13);
INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1003, '����������� � �', 5004, 0.1);
INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1004, '�������� � �', 5007, 0.11);
INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1007, '����� � �', 5003, 0.15);
INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1005, '�������� � �', 5008, 0.09);
INSERT INTO SALESPEOPLE (SALNUM, SALNAME, CITNUM, COMM) VALUES (1006, '��������� � �', 5006, 0.18);

COMMIT WORK;

INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2001, '������ � �', 5007, 100, 1001);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2002, '��������� � �', 5008, 200, 1003);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2003, '����� � �', 5006, 250, 1002);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2004, '������ � �', 5003, 300, 1002);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2006, '�������� � �', 5007, 120, 1001);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2007, '������� � �', 5008, 100, 1004);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2008, '�������� � �', 5002, 320, 1007);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2009, '������� � �', 5006, 100, null);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2010, '������� � �', 5002, 50, 1002);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2011, '�������� � �', 5006, 300, 1003);
INSERT INTO CUSTOMERS (CUSNUM, CUSNAME, CITNUM, RATING, SALNUM) VALUES (2012, '������ � �', 5001, 130, 1002);

COMMIT WORK;

INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3003, 18.69, '2019-03-10', 2008, 1007);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3005, 1900.1, '2019-03-10', 2007, 1004);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3006, 767.19, '2019-03-10', 2001, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3007, 5160.45, '2019-03-10', 2003, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3008, 1098.16, '2019-03-10', 2008, 1007);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3009, 75.75, '2019-04-10', 2002, 1003);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3010, 4723, '2019-05-10', 2006, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3012, 1309.95, '2019-06-10', 2004, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3013, 9891.88, '2019-06-10', 2006, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3014, 5690.54, '2019-06-12', 2004, 1004);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3015, 1564.23, '2019-06-15', 2006, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3016, 2689.56, '2019-05-12', 2009, 1004);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3011, 897.5, '2019-06-15', 2003, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3023, 7000, '2019-10-16', 2002, 1003);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3019, 6500, '2019-08-17', 2008, 1007);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3002, 500, '2018-12-20', 2004, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3001, 1800, '2018-12-15', 2012, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3020, 4680, '2019-09-15', 2004, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3021, 3501.5, '2019-09-18', 2006, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3022, 1200, '2019-10-10', 2004, 1005);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3004, 256.45, '2019-02-02', 2004, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3024, 1151, '2019-11-12', 2010, 1002);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3025, 900, '2019-12-03', 2006, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3017, 3181.56, '2019-07-10', 2001, 1001);
INSERT INTO ORDERS (ORDNUM, AMT, ORDDATE, CUSNUM, SALNUM) VALUES (3018, 506, '2019-07-11', 2006, 1001);

COMMIT WORK;



/******************************************************************************/
/****                             Primary Keys                             ****/
/******************************************************************************/

ALTER TABLE CITIES ADD CONSTRAINT PK_CITIES PRIMARY KEY (CITNUM);
ALTER TABLE CUSTOMERS ADD CONSTRAINT PK_CUSTOMERS PRIMARY KEY (CUSNUM);
ALTER TABLE ORDERS ADD CONSTRAINT PK_ORDERS PRIMARY KEY (ORDNUM);
ALTER TABLE SALESPEOPLE ADD CONSTRAINT PK_SALESPEOPLE PRIMARY KEY (SALNUM);
ALTER TABLE STATUSES ADD CONSTRAINT PK_STATUSES PRIMARY KEY (STANUM);


/******************************************************************************/
/****                             Foreign Keys                             ****/
/******************************************************************************/

ALTER TABLE CITIES ADD CONSTRAINT FK_CITIES_2 FOREIGN KEY (STANUM) REFERENCES STATUSES (STANUM) ON UPDATE CASCADE;
ALTER TABLE CUSTOMERS ADD CONSTRAINT FK_CUSTOMERS_2 FOREIGN KEY (CITNUM) REFERENCES CITIES (CITNUM) ON UPDATE CASCADE;
ALTER TABLE CUSTOMERS ADD CONSTRAINT FK_CUSTOMERS_3 FOREIGN KEY (SALNUM) REFERENCES SALESPEOPLE (SALNUM) ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE ORDERS ADD CONSTRAINT FK_ORDERS_2 FOREIGN KEY (CUSNUM) REFERENCES CUSTOMERS (CUSNUM) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE ORDERS ADD CONSTRAINT FK_ORDERS_3 FOREIGN KEY (SALNUM) REFERENCES SALESPEOPLE (SALNUM) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE SALESPEOPLE ADD CONSTRAINT FK_SALESPEOPLE_2 FOREIGN KEY (CITNUM) REFERENCES CITIES (CITNUM) ON UPDATE CASCADE;
