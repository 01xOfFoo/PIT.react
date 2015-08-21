var gulp         = require('gulp');
var config       = require('../config').scripts;

gulp.task('scripts', function() {

  gulp.src(config.src)
    .pipe(gulp.dest(config.dest)
  );

});
