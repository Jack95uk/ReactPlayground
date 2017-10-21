var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', () => {
  gulp.watch('./stylesheets/**/*.scss', () => {
    gulp.src('./stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./stylesheets/css'))
  })
})
