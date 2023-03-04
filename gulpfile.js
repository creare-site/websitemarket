/*
* Simple GULP tooling
* Copyright AppSeed (https://appseed.us)
* License MIT
*/
var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('gulp-open');

const cleanCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

var Paths = {
  HERE: './',
  DIST: 'dist/',
  HTML: 'src/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/web-agency.scss',
  SCSS: './assets/scss/**/**'
};

gulp.task('scss', function() {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    //.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    //.pipe(sourcemaps.write(Paths.HERE))
    .pipe(cleanCss())
    .pipe(gulp.dest(Paths.CSS));
});

gulp.task('watch', function() {
  gulp.watch(Paths.SCSS, gulp.series('scss'));
  gulp.watch(Paths.HTML, gulp.series('compressHtml'));
});

gulp.task('open', function() {
  gulp.src('index.html')
    .pipe(open());
});

gulp.task('compressHtml', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('.'));
});

gulp.task('prod', gulp.parallel('scss', 'compressHtml'));

gulp.task('default', gulp.parallel('open', 'watch'));
