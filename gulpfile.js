'use strict';

require('./gulp');

var figlet = require('figlet');
var chalk  = require('chalk');

figlet(' The Beer Store', {
    font: 'Slant'
  }, function(err, data) {
  console.log(chalk.yellow.bold(data) + '\n');
  console.log(' Hit \'' + chalk.blue('<ctrl-c>') + '\' to shutdown.\n');
});
