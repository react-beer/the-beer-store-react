'use strict';

// Necessary plugins
var gulp        = require('gulp');
var buildScript = require('./scripts');
var paths       = require('../paths');

// Call Watch
module.exports = gulp.task('watch', function() {
  gulp.watch(paths.source.styl.folder, ['styles']);
  gulp.watch(paths.source.img, ['images']);
  return buildScript('main.js', true);
});
