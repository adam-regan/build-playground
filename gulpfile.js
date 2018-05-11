var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var browserify = require('browserify');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('default', function (callback) {
    return runSequence('clean', 'transpile', callback)
});

gulp.task('watch', function () {
    gulp.start('default');
    return watch('src/**', function () {
        return gulp.start('default')
    });
});

gulp.task('transpile', function () {
    return gulp.src('src/main.js')
        .pipe(babel({
            "presets": ['env']
        }))
        .pipe(gulp.dest('output/'));
});

gulp.task('clean', function () {
    return del(['output']);
});