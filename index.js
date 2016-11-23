const  lib = require('./lib/lib.js');

lib.getModuleList((err, modules) => console.log(modules));