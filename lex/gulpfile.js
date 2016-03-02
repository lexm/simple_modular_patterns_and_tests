'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

var path = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['lint']);
