var gulp          = require('gulp');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var gutil         = require('gulp-util');

gulp.task('scripts', function() {
    return gulp.src(
          ['textscan/shared_funcs.js',
          'textscan/html_inject.js',
          'textscan/measure_canvas.js',
          'textscan/text_processing.js',
          'textscan/dom_collect.js',
          'textscan/file_collect.js',
          'textscan/ctx_worker.js',
          'textscan/main.js'])
          .pipe(concat('word_tags.js'))
          .pipe(gulp.dest('dist'))
          .pipe(rename('word_tags.min.js'))
          .pipe(uglify().on('error', gutil.log))
          .pipe(gulp.dest('dist'));
});
