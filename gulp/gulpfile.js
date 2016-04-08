var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'), 
    rename = require('gulp-rename');

var my_scripts = 'src/**/*.js';
// Otra manera => 
// var my_scripts = [ 'src/uno.js', 'src/dos.js' ];

gulp.task('scripts', function () {
    console.log('it work!');
    return gulp.src(my_scripts)
        .pipe(uglify('main.min.js')) // Comprime a main.min.js
        .pipe(gulp.dest('./dist')); // Destino del nuevo fichero en el directorio ./dist
});

gulp.task('watch', function(){ 
    gulp.watch(my_scripts, ['scripts']); 
});

gulp.task('css', function(){ 
    return gulp.src('src/main.less') 
        .pipe(less()) // Compilamos 
        .pipe(rename('compiled-style.css')) // Renombramos
        .pipe(gulp.dest('./dist')); // Indicamos destino 
});

gulp.task('default', ['scripts', 'css', 'watch']);