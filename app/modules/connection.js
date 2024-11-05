/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$   Author: Kiselev Denis (@de0ver)   $
	$   Create Date: 03.11.2024 14:52     $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ 
*/
const firebird = require("node-firebird");
const globals = require("./globals");

let dbOptions = {
  host: IP,
  port: PORT,
  database: DBNAMES[0],
  user: USER,
  password: PASSWORD,
};

function checkPart(part) {
  return PART[part][1];
}

module.exports = async function (sql_string, part) {
  return new Promise((resolve, reject) => {
    dbOptions.database = __dirname.slice(0, -7) + "\\database\\" + DBNAMES[checkPart(part)];

    firebird.attach(dbOptions, function (err, db) {
      if (err) {
        return reject(err);
      }

      db.query(sql_string.toString(), function (err, result) {
        if (err) {
          db.detach();
          return reject(err);
        }

        resolve(result);
        db.detach();
      });
    });
  });
};
