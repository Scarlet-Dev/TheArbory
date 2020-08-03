'use strict'
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('compileScss', function () {
   return gulp.src('./src/sass/styles.scss')
   .pipe(sass({
       outputStyle: 'nested',
       outFile: 'styles.css',
       precision: 10,
       onError: console.error.bind(console, 'Sass error:'),
       onSuccess: console.log('Sass compile success!')
   }))
   .pipe(autoprefixer({browser: AUTOPREFIXER_BROWSERS}))
   .pipe(csso())
   .pipe(gulp.dest('./src/styles/css'))
});

gulp.task('compressCss', function() {
    return gulp.src('./src/css/*.css')
    .pipe()
})

gulp.task('compressJs', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(uglify({
        output: console.log('')
    }))
    .pipe(gulp.dest('./dis/js'))
});

gulp.task('compressHtml', function() {
    return gulp.src(['./src/**/*.html', './src/*.html'])
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('compressImages', function() {
    return gulp.src(['./src/assets/*.+(png|jpg|jpeg|gif|svg)'])
    .pipe()
})

gulp.task('buildDist')

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];
