var gulp = require('gulp');

gulp.task('default', function() {

  gulp.start('markup', 'css', 'scripts', 'watch');

});
