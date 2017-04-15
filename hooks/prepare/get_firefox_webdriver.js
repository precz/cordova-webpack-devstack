#!/usr/bin/env node

let os = require('os');
let exec = require('child_process').exec;
let path = require('path');

let NAME = 'geckodriver';
let VERSION = 'v0.15.0';
let SUFIX = '.tar.gz';
let RELEASE_URL = 'https://github.com/mozilla/geckodriver/releases/download/' + VERSION + '/';
let DIR = 'bin/';

wGet();

function resolveArch () {
  switch(os.arch()) {
    case 'x64':
      return '64';
    case 'x86':
      return '86';
  }
}

function getVersion () {
  switch(os.platform()) {
    case 'linux':
      return [NAME, VERSION, 'linux' + resolveArch()].join('-') + SUFIX;
    case 'darvin':
      return [NAME, VERSION, 'macos'] + SUFIX;
    case 'win32':
      return [NAME, VERSION, 'win' + resolveArch()].join('-') + SUFIX;
  } 
}

function setSystemPath () {
  exec(
    ['export', 'PATH=$PATH:' + path.resolve(__dirname, '../../' + DIR)].join(' '),
    function (error, stdout, stderr) {
      if (error === null) {
        return;
      }
      console.log(error, stdout, stderr);
    }
  );
}

function extract () {
  var version = getVersion();

  exec(
    ['tar', '-xf', DIR + version, '-C', DIR].join(' '),
    function (error, stdout, stderr) {
      if (error === null) {
        return setSystemPath();
      }
      console.log(error, stdout, stderr);
    }
  )
}

function wGet () {
  var version = getVersion();
  var url = RELEASE_URL + version;

  exec(
    ['wget', url, '-O', DIR + version].join(' '),
    function (error, stdout, stderr) {
      if (error === null) {
        return extract();
      }
      console.log(error, stdout, stderr);
    }
  );
}
