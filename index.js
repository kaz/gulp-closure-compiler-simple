"use strict";

const through = require("through2");
const closure = require("closure-compiler");

module.exports = flags => {
	flags = flags || {};
	if(!flags.jar){
		flags.jar = require.resolve("google-closure-compiler/compiler.jar");
	}
	return through.obj(function(file, encode, callback){
		closure.compile(file.contents, flags, (error, result) => {
			if(error){
				this.emit("error", new Error(error));
			}else{
				file.contents = new Buffer(result);
				this.push(file);
			}
			callback();
		});
	});
};
