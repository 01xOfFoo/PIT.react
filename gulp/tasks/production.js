var gulp  = require('gulp');

gulp.task('prod', ['clean'], function() {

  gulp.start(['browserify', 'markup', 'css']);

});
