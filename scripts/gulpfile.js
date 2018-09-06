var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');

// compile all your Sass
gulp.task('sass', function () {
    return gulp.src('main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefix(
            "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('main.scss', gulp.series('sass'));

});