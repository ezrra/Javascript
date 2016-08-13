var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    gulpif = require('gulp-if');

gulp.task('compress', function () {
gulp.src('./index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.js', uglify()))
    .pipe(useref.restore())
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
});