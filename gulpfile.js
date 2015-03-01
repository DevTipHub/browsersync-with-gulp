var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

var browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Set BrowserSync default configuration.
browserSync({
    server: './public',
    open: false,
    port: 3000
});

gulp.task('styles', function () {
    return sass('public/sass/styles.scss', {style: 'compressed'})
        .pipe(gulp.dest('public/css'))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['styles'], function () {

    // Watch for any CSS changes.
    gulp.watch('public/sass/styles.scss', ['styles']);

});

