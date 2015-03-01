var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	sass = require('gulp-ruby-sass');

var browserSync = require('browser-sync'),
	reload = browserSync.reload;

var paths = {
	css: ['public/sass/styles.scss'],
	html: ['public/**/*.html'],
	js: ['public/js/**/*.js']
};

// Set the BrowserSync configuration.
gulp.task('browser-sync', function() {
	// Server Config.
	browserSync({
		server: './public',
		notify: false,
		open: true,
		port: 3000
	});

	// Proxy Config.
	//browserSync({
	//	proxy: 'localhost:8888',
	//	notify: false,
	//	open: true,
	//	port: 3000
	//});
});

gulp.task('jshint', function () {
	return gulp
		.src(paths.js)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('styles', function () {
	return sass(paths.css, {style: 'compressed'})
		.pipe(gulp.dest('public/css'))
		.pipe(reload({stream: true}));
});

gulp.task('default', ['browser-sync', 'styles'], function () {

	// Watch for any CSS changes.
	gulp.watch(paths.css, ['styles']);

	// Watch for any html changes.
	gulp.watch(paths.html).on('change', reload);

	// Watch for any javascript changes.
	// Run jshint and then trigger browserSync.reload.
	gulp.watch(paths.js, ['jshint', reload]);

});