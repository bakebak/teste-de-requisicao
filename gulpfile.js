var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
var server = {
  host: '192.168.1.140',
  port: '8080'
}

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      fallback: 'dist/index.html',
      host: server.host,
      port: server.port
    }));
});

gulp.task('minify-html', function () {
   gulp.src('app/*.html') // path to your files
   .pipe(minifyHtml())
   .pipe(gulp.dest('dist/'));
});

gulp.task('default', function () {
 //gulp.start('minify-html');
 gulp.start('webserver');
});