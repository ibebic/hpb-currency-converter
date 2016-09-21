'use strict';

function toUpper(str) {
  str = str || '';
  return str.toUpperCase();
}

function toFloat(str) {
  if (!str || !str.length) return 0;
  return str.replace(',', '.');
}

function parseArgs(args) {
  var argArray = {};
  if (/^[0-9]+$/.test(args[0])) {
    argArray[0] = args[0];
    argArray[1] = args[1];
    argArray[2] = args[3];
  } else {
    var myArray = args[0].split(/(\d+)/);
    argArray[0] = myArray[1];
    argArray[1] = myArray[2];
    argArray[2] = args[2];
  }
  return argArray;
}

module.exports = {
  toUpper,
  toFloat,
  parseArgs
};
