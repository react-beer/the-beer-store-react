'use strict';

// Necessary plugins
var source      = require('vinyl-source-stream');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var plumber     = require('gulp-plumber');
var browserify  = require('browserify');
var babelify    = require('babelify');
var watchify    = require('watchify');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var paths       = require('../paths');

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

function buildScript(file, watch) {
  var props = {
    entries: ['./src/js/' + file],
    debug: true,
    transform: ['reactify']
    // transform: ['reactify', { 'es6': true }] // ES6
    // transform: [babelify] // ES6
    // transform: [babelify.configure({ stage: 0 })] // ES6, ES7
  };

  // var bundler = watch ? watchify(browserify(props)) : browserify(props);
  var bundler = watch ? watchify(browserify(props), { poll: true }) :
    browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      // .pipe(source(file))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./build/js/'))
      .pipe(reload({ stream: true }));
  }

  // Listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // Run it once the first time buildScript is called
  return rebundle();
}

// Call Scripts
module.exports = gulp.task('scripts', function() {
  return buildScript('main.js', false);
});

module.exports = buildScript;
