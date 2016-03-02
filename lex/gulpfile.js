'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var path = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(eslint())
    .pipe(eslint.format());
});

n

gulp.task('default', ['lint']);
