'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var mash = require('gulp-concat');
var csso = require('gulp-csso');

gulp.task('default', function () {
    gulp.src('src/theme.scss')
        .pipe(sass().on('error', sass.logError))
	    .pipe(mash('style.css'))
	    .pipe(csso())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/**/*.scss', ['default']);
});
