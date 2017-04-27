var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('temp-project', function (){
    gulp.src('./app/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./dist/app'));

    gulp.src('./app/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./dist/app'));

    gulp.src('./assets/css/*.css')
          .pipe(cssmin())
          .pipe(gulp.dest('./dist/assets/css'));

    gulp.src('./assets/img/*.png')
          .pipe(gulp.dest('./dist/assets/img/'));


    gulp.src('./components/views/lista-items/*.html')
          .pipe(gulp.dest('./dist/components/views/lista-items'));

    gulp.src('./components/views/login/*.html')
          .pipe(gulp.dest('./dist/components/views/login'));

    gulp.src('./components/views/lista-items/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./dist/components/views/lista-items'));

    gulp.src('./components/views/lista-items/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./dist/components/views/lista-items'));

    gulp.src('./dados/*')
          .pipe(gulp.dest('./dist/dados/'));
    gulp.src('./index.html')
          .pipe(gulp.dest('./dist'));

    gulp.src('./package.json')
          .pipe(gulp.dest('./dist/'));


});

gulp.task('default', ['temp-project', 'webserver']);
