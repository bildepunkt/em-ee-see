var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var autoprefix = require('gulp-autoprefixer');

gulp.task('clean', function(cb) {
	del(['./build'], cb);
});

// styles
gulp.task('styles-prefix', ['styles-concat'], function () {
    return gulp.src('./build/*.css')
        .pipe(autoprefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./build'));
});
gulp.task('styles-concat', ['styles-compile'], function() {
  return gulp.src('./build/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build'));
});
 
gulp.task('styles-compile', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass({
        	map: false,
        	compress: true
        }))
        .pipe(gulp.dest('./build'));
});

// scripts
gulp.task('scripts', function () {
    return gulp.src('js/main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./build'));
});

// prod b/c clean
gulp.task('default', ['clean'], function() {
    gulp.start('styles-prefix', 'scripts');
});

// dev b/c no clean
gulp.task('watch', function() {
	gulp.watch('./scss/*.scss', ['styles-prefix']);
    gulp.watch('./js/**/*.js', ['scripts']);
});
