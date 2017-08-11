var gulp = require('gulp');
	browserSync = require ('browser-sync');
	reload = browserSync
	sass = require('gulp-sass');
	mash = require('gulp-concat-css');
	csso = require('gulp-csso');

gulp.task('build', function(){
    gulp.src('src/theme.scss')
        .pipe(sass().on('error', sass.logError))
	  	.pipe(mash('unminified.css'))
        .pipe(gulp.dest('./css'))
        .pipe(mash('final code.css'))
        .pipe(csso())
        .pipe(gulp.dest('./css'))
});

gulp.task('html', function(){
	gulp.src('./*.html');
});

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./"
		}
	});
});

gulp.task('watch', ['build'], function(){
    gulp.watch('src/**/*.scss', ['build']);
});

gulp.task('default', ['build']);