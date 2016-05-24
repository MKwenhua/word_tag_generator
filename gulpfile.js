var gulp          = require('gulp');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var gutil         = require('gulp-util');

gulp.task('scripts', function() {
    return gulp.src(
          ['javascript_src/shared_funcs.js',
          'javascript_src/html_inject.js',
          'javascript_src/measure_canvas.js',
          'javascript_src/text_processing.js',
          'javascript_src/dom_collect.js',
          'javascript_src/dom_select.js',
          'javascript_src/file_collect.js',
          'javascript_src/ctx_worker.js',
          'javascript_src/main.js'])
          .pipe(concat('word_tags.js'))
          .pipe(gulp.dest('dist'))
          .pipe(rename('word_tags.min.js'))
          .pipe(uglify().on('error', gutil.log))
          .pipe(gulp.dest('dist'));
});
