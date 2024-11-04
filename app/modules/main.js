/*  
	  $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	  $                                     $
	  $	  Author: Kiselev Denis (@de0ver)	  $
	  $	  Create Date: 03.11.2024 15:24	    $
	  $                                     $
    $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/
const connection = require('./connection');
const globals = require('./globals');

function start(part, task) {
  connection(SQLLIST[part][task]);
}

module.exports = function (part, task) {

  start(part.toString(), task); //main

  process.on('SIGBREAK', () => {
    process.exit(0);
  }); 
};
