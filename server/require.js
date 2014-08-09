//REQUIRE MODULES
var http = require("http"),
    qs = require('querystring'),
    mysql = require('mysql'),
    mime = require('mime'),
    fs = require('fs'),
    errno = require('errno');

//EXPORT MODULES
exports.http = http;
exports.qs = qs;
exports.mysql = mysql;
exports.mime = mime;
exports.fs = fs;
exports.errno = errno;

//NOTE: Don't forget to add new required modules to export!
