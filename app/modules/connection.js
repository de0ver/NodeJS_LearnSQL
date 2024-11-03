/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$	Author: Kiselev Denis (@de0ver)	  $
	$	Create Date: 03.11.2024 14:52	  $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/

const firebird = require('node-firebird');
const globals = require('./globals');

let dbOptions = {
	host: IP,
	port: PORT,
	database: DBNAMES[0],
	user: USER,
	password: PASSWORD,
};

function check_part(part) { return part <= 5 ? 0 : 1; }

module.exports = function (sql_string, part) //choose part & his database
{
    globals.CLEAR();
    globals.CHANGEFONTCOLOR(COLORS.reset);

    dbOptions.database = (__dirname).slice(0, -7) + '\database\\' + DBNAMES[check_part(part)];

    firebird.attach(dbOptions, function(err, db) {
        try
        {
            globals.PRINT('Выполняется запрос...');
            db.execute(sql_string, function (err, result) {
                globals.PRINT('Результат: \n');
                globals.PRINT(result);
                db.detach();
            });
           
        } catch (err) {
            globals.CLEAR();
            globals.PRINT(err);
        }
    });
}