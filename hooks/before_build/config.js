#!/usr/bin/env node

//this file fills config.temp.xml with data and saves to config.xml

let fs = require('fs');
let path = require('path');
let _ = require('lodash');

let packageConfig = require('../../package.json');
let cordovaConfigTemplate = fs.readFileSync(
	path.resolve(__dirname, '../temp/config.temp.xml'),
	{ encoding: 'UTF-8' }
);

let cordovaConfig = _.template(cordovaConfigTemplate)(
	{ package: packageConfig}
);

fs.writeFileSync(
	path.resolve(__dirname, '../../config.xml'),
	cordovaConfig
);
