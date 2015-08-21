var gulp         = require('gulp');
var config       = require('../config').markup;

gulp.task('markup', function() {

  gulp.src(config.src + '/index.html')
    .pipe(gulp.dest(config.dest)
  );

});
