# gulp-closure-compiler-simple

[![NPM](https://nodei.co/npm/gulp-closure-compiler-simple.png)](https://nodei.co/npm/gulp-closure-compiler-simple/)

## Usage

```javascript
"use strict";

const gulp = require("gulp");
const rename = require("gulp-rename");
const closure = require("gulp-closure-compiler-simple");

gulp.task("minify", _ => gulp.src("js/*.js")
	.pipe(closure({language_in: "ES6", language_out: "ES5"}))
	.pipe(rename({extname: ".min.js"}))
	.pipe(gulp.dest("js"))
);
```
