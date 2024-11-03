/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$									  $
	$	Author: Kiselev Denis (@de0ver)	  $
	$	Create Date: 03.11.2024 14:51	  $
	$									  $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/

const connection = require('./connection');
const globals = require('./globals');

function start() {
  globals.CLEAR();
  globals.CHANGEFONTCOLOR(global.COLORS.green);
  RL.question(
    'Выбери часть ' +
      global.PART[0] +
      '-' +
      global.PART[global.PART.length - 1] +
      ': ',
    (part) => {
      try {
        part > 0 && part < 7 ? get_tasks(part) : RL.close();
      } catch (err) {
        globals.PRINT(err);
        RL.close();
      }
    }
  );
}

function get_tasks(part) {
  globals.CHANGEFONTCOLOR(global.COLORS.green);
  RL.question(
    'Выбери задачу 1' + '-' + global.SQLLIST['part' + part].length + ': ',
    (task) => {
      try {
        connection(global.SQLLIST['part' + part][task - 1], part);
      } catch (err) {
        globals.PRINT(err);
        RL.close();
      }
    }
  );
}

module.exports = function () {
  globals.CLEAR();
  globals.CHANGEFONTCOLOR(global.COLORS.green);

  start(); //main

  process.on('SIGWINCH', () => { //handle onresize of console
    globals.CLEAR();
    globals.PRINT(RL.output.columns + 'x' + RL.output.rows);
  }); 
  process.on('SIGBREAK', () => { //clear all changes on exit
    globals.CLEAR();
    globals.CHANGEFONTCOLOR(global.COLORS.reset);
    process.exit(0);
  }); 
};
