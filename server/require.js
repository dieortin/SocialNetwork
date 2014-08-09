//REQUIRE MODULES
var http = require("http"),
    qs = require('querystring'),
    mysql = require('mysql'),
    mime = require('mime'),
    fs = require('fs');

//EXPORT MODULES
exports.http = http;
exports.qs = qs;
exports.mysql = mysql;
exports.mime = mime;
exports.fs = fs;

//NOTE: Don't forget to add new required modules to export!
