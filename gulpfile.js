var gulp = require('gulp');
connect = require('gulp-connect');
var open = require('gulp-open');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open({uri: 'http://localhost:8080'}));
});

gulp.task('default', ['connect', 'open']);
