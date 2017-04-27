var gulp = require('gulp');
var gulpif = require('gulp-if');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

// abre um webserver para rodar a aplicação
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// cria uma pasta dist com todo o projeto ja minificado para uso
gulp.task('dist-project', function (){
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

    gulp.src('./assets/js/')
          .pipe(gulp.dest('./dist/assets/js'));

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

// task que inicializa as task do gulp
gulp.task('default', ['dist-project', 'webserver']);
