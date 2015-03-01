# browsersync-with-gulp
From the article: in progress...

## Installation Steps

npm install -g browser-sync

sudo npm install

    var gulp = require('gulp'),
        sass = require('gulp-ruby-sass');

    gulp.task('styles', function () {
        return sass('public/sass/styles.scss', {style: 'compressed'})
            .pipe(gulp.dest('public/css'));
    });

    gulp.task('default', ['styles'], function () {

        // Watch for any CSS changes.
        gulp.watch('public/sass/styles.scss', ['styles']);

    });

