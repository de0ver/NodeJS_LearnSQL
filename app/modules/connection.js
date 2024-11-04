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

function check_part(part) { return 0; }//part <= 5 ? 0 : 1; }

module.exports = function (sql_string, part) //choose part & his database
{
    dbOptions.database = (__dirname).slice(0, -7) + '\database\\' + DBNAMES[check_part(part)];

    firebird.attach(dbOptions, function(err, db) {
        try
        {
            globals.PRINT('Promise...');
            db.execute(sql_string.toString(), function (err, result) {
                globals.PRINT('Result: \n');
                globals.PRINT(result);
                db.detach();
            });
           
        } catch (err) {
            globals.PRINT(err);
        }
    });
}
