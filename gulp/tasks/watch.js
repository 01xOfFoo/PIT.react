var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify','browserSync'], function() {

  gulp.watch(config.styles.src, ['css']);
  gulp.watch(config.markup.src, ['markup']);

});
