var gulp = require('gulp');

var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var series = require('stream-series');
var karma = require('karma').server;

gulp.task('lint', function () {
   return gulp.src('src/app/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

gulp.task('index', function () {
    var angular = gulp.src(['./src/lib/**/angular.js'], {read : false});
    var libStream = gulp.src([
        '!./src/lib/**/angular.js',
        './src/lib/**/*.js',
        '!./src/lib/**/*.min.js',
        './src/**/*.css',
        '!./src/**/*.min.css'], {read : false});

    var appStream = gulp.src(['./src/app/**/*.js'], {read : false});

    var streams = [angular, libStream, appStream];

    return gulp.src('./src/index.html')
        .pipe(inject(series(streams), {relative: true}))
        .pipe(gulp.dest('./src'));
});


gulp.task('test', ['index'], function (done) {
    karma.start({configFile: __dirname + '/karma.conf.js'}, done);
});

gulp.task('watch', function () {
   gulp.watch('src/app/*.js', ['lint', 'index', 'test']);
});

gulp.task('default', ['lint', 'index', 'test', 'watch']);