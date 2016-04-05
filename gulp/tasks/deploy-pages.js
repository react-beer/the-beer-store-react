'use strict';

// Necessary plugins
var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');
var paths   = require('../paths');

// Deploy to GitHub pages
module.exports = gulp.task('deploy-pages', function() {
  return gulp.src(['./.gitignore', paths.deploy.pages])
    .pipe(ghPages());
});
