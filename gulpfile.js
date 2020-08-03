'use strict'
var autoprefixer = require('autoprefixer')
var cache = require('gulp-cache');
var del = require('del');
var gulp = require('gulp');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-clean-css');
const useref = require('gulp-useref');

//Compile scss to css
gulp.task('compileScss', function () {
   return gulp.src('./src/sass/styles.scss')
   .pipe(sass({
       outputStyle: 'nested',
       outFile: 'styles.css',
       precision: 10,
       onError: console.error.bind(console, 'Sass error:'),
       onSuccess: console.log('Sass compile success!')
   }))
   .pipe(gulp.dest('./src/styles/'))
});

//Minify css
gulp.task('minifyCss', function() {
    return gulp.src('/src/css/styles.css')
    .pipe(autoprefixer())
    .pipe(uglifyCss())
    .pipe(gulp.dest('dist/'))
})

//Minify Js
gulp.task('minifyJs', function () {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
})

gulp.task('moveFonts', function() {
    return gulp.src('./src/fonts/*.ttf')
    .pipe(gulp.dest('dist/fonts'))
})

//Minifies and updates the user refs in html files
//For js and css
gulp.task('changeUserefs', function() {
    return gulp.src('./src/**/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/'));
})

//Compress all media image types
gulp.task('compressImages', function() {
    return gulp.src(['./src/assets/**/*.+(png|jpg|jpeg|gif|svg)'])
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('dist/'))
});

//
gulp.task('clean:dist', function() {
    return del.sync('dist/')
});

//Build src into a dist file
gulp.task('build:dist', function() {
    runSequence('', [''])
});