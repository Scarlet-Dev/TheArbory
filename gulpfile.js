'use strict'
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

function buildDist(){
    Promise.all([compileScss, minifyJs, minifyHtml])
    .then(console.log('Gulp build complete!'))
    .catch(console.error.bind(console, 'There was an error when building the dist folder.'))
}

async function compileScss(){
    await gulp.task('styles', function () {
        return gulp.src('./src/sass/styles.scss')
        .pipe(sass({
            outputStyle: 'nested',
            outFile: 'style.css',
            precision: 10,
            onError: console.error.bind(console, 'Sass error:'),
            onSuccess: console.log('Sass compile success!')
        }))
        .pipe(autoprefixer({browser: AUTOPREFIXER_BROWSERS}))
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'))
    })
}

async function minifyJs(){
    await gulp.task('scripts', function() {
        return gulp.src('./src/js/**/*.js')
        .pipe(uglify({
            output: console.log('')
        }))
        .pipe(gulp.dest('./dis/js'))
    })
}

async function minifyHtml(){
    await gulp.task('pages', function() {
        return gulp.src(['./src/**/*.html', './src/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
    });
}

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

exports.default = buildDist