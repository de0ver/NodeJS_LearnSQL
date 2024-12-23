/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$   Author: Kiselev Denis (@de0ver)   $
	$   Create Date: 03.11.2024 14:50     $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ 
*/
global.PATH = require("path");
global.DBNAMES = ["base01.fdb", "base02.fdb"]; //check folder database and get names (0_-)
global.PART = {
  part1: ["1 Практика.pdf", DBNAMES[0]],
  part2: ["2 Практика.pdf", DBNAMES[0]],
  part3: ["3 Практика.pdf", DBNAMES[0]],
  part4: ["4 Практика.pdf", DBNAMES[0]],
  part5: ["5 Практика.pdf", DBNAMES[0]],
  part6: ["6 Практика.pdf", DBNAMES[1]],
};
global.IP = "127.0.0.1";
global.PORT = 3050;
global.USER = "SYSDBA";
global.PASSWORD = "masterkey";
global.ENCODING = "UTF8";
global.SQLLIST = {
  part1: [
    //practicum 1
    "select SNAME, COMM from SALESPEOPLE",
    "select ONUM, ODATE, AMT from ORDERS",
    "select CITY, SNAME, COMM from SALESPEOPLE",
  ],
  part2: [
    //practicum 2
    "select * from SALESPEOPLE",
  ],
  part3: [
    //practicum 3
    "select avg(AMT) from ORDERS",
    "select SNAME, max(AMT) from ORDERS group by SNAME",
    "select SNAME, ODATE, max(AMT) from ORDERS group by ODATE, SNAME",
    "select SNAME, sum(AMT) from ORDERS group by SNAME",
    "select SNAME, min(AMT) from ORDERS where (AMT > 1200) group by SNAME",
    "select count(SNAME) from ORDERS where (SNAME = 'Семенов Д О') group by SNAME",
    "select count(ODATE) from ORDERS where ODATE like '%3%'",
    "select count(distinct(CITY)) from customers",
    "select CNAME, min(AMT) from ORDERS group by CNAME",
    "select CNAME from CUSTOMERS where CNAME like 'Г%' rows 1",
    "select CITY, max(RATING) from CUSTOMERS group by CITY",
    "select ODATE, count(ODATE) from ORDERS group by ODATE",
    "select CITY from SALESPEOPLE group by CITY having count(CITY) > 1",
    "select CNAME from ORDERS group by CNAME having sum(AMT) > 2000",
  ],
  part4: [
    //practicum 4
    "select * from SALESPEOPLE",
  ],
  part5: [
    //practicum 5
    "select * from SALESPEOPLE",
  ],
  part6: [
    //practicum 6
    "select * from SALESPEOPLE",
  ],
};
global.GIVEMEJOKE = "select FIRST 1 * from JOKES ORDER BY rand()";
