var gulp         = require('gulp');
var config       = require('../config');

gulp.task('css', function() {

  gulp.src(config.styles.src)
    .pipe(gulp.dest(config.styles.dest)
  );

});
