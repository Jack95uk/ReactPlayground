var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', () => {
  gulp.watch('./src/stylesheets/**/*.scss', () => {
    gulp.src('./src/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/stylesheets/css'))
  })
})
