/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$	Author: Kiselev Denis (@de0ver)	  $
	$	Create Date: 03.11.2024 14:50	  $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/

global.READLINE = require('node:readline');
global.RL = global.READLINE.createInterface({ input: process.stdin, output: process.stdout });
global.PART = [1, 2, 3, 4, 5, 6]; 
global.DBNAMES = ['base01.fdb', 'base02.fdb']; //check folder database and get names (0_-)
global.IP = '127.0.0.1';
global.PORT = 3050;
global.USER = 'SYSDBA';
global.PASSWORD = 'masterkey';
global.ENCODING = 'UTF8';
global.COLORS = { //https://dvmn.org/encyclopedia/python_strings/ansi-codes/
    green:     '\x1b[32m',
    red:       '\x1b[31m',
    yellow:    '\x1b[33m',
    blue:      '\x1b[34m',
    white:     '\u001b[37m',
    reset:     '\x1b[0m',
    bggreen:   '\u001b[42m',
    bgred:     '\u001b[41m',
};
global.SQLLIST = {
    part1: [ //practicum 1
        "select * from SALESPEOPLE",
    ],
    part2: [ //practicum 2
        "select * from SALESPEOPLE",
    ],
    part3: [ //practicum 3
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
        "select CNAME from ORDERS group by CNAME having sum(AMT) > 2000"
    ],
    part4: [ //practicum 4
        "select * from SALESPEOPLE",
    ],
    part5: [ //practicum 5
        "select * from SALESPEOPLE",
    ],
    part6: [ //practicum 6
        "select * from SALESPEOPLE",
    ],
};
    

module.exports = {
    PRINT: (text) => { return console.log(text); },
    CLEAR: () => { return console.log('\x1bc'); },
    CHANGEFONTCOLOR: (color) => { return console.log(color); },
    CHANGEBGCOLOR: (color) => { return console.log(color); },
}