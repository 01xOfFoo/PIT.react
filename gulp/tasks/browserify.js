var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var browserify   = require('browserify');
var babelify     = require('babelify');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var watchify     = require('watchify');
var handleErrors = require('../util/handle-errors');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config').browserify;
var _            = require('lodash');

function browserifyTask(devMode) {

  var browserifyThis = function(bundleConfig){

    var b = browserify(bundleConfig);

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return b
        .transform(babelify.configure({stage: 0}))
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .pipe(browserSync.reload({stream: true})
      );
    };

    if(devMode) {
      b = watchify(b);

      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      if(bundleConfig.require) b.require(bundleConfig.require);
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    return bundle();
  };

  return browserifyThis(config);
}

gulp.task('browserify', function() {
  return browserifyTask();
});

module.exports = browserifyTask;
