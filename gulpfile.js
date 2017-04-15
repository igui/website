/* jshint esversion: 6 */
/* jshint node: true */
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');
const spawn = require('child_process').spawn;

function handleError(err)
{
    console.error(err.toString());
    this.emit('end');
}

/* Compile Our Sass */
gulp.task('sass', () => {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .on('error', handleError)
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest('app/static/css'))
});

/* Watch Files For Changes */
gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('app/scss/**/*.scss', ['sass']);

    /* Trigger a live reload on any Django template changes */
    gulp.watch('app/templates/**/*.html').on('change', livereload.changed);
    gulp.watch('app/static/**/*.js').on('change', livereload.changed);
    gulp.watch('app/static/**/*.css').on('change', livereload.changed);
});

/* Run local server */
gulp.task('runserver', () => {
    const runserver = spawn('heroku', 
        ['local', 'web', '-f', 'Procfile.windows'],
        {
            stdio: 'inherit',
            shell: true
        });
});

gulp.task('default', ['sass', 'watch', 'runserver']);