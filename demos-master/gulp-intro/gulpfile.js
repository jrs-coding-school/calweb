var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('main-bower-files');

var paths = {
  appjs: ['app/app.module.js', 'app/books/books.module.js', 'app/**/*.js', '!app/vendor', '!app/vendor/**'],
  vendor: ['app/vendor/**/*.js']
};
gulp.task('scripts', ['appjs', 'vendorjs']);
gulp.task('addJsToHtml', function () {
  gulp.src('app/index.html')
    .pipe(plugins.inject(gulp.src(['app.vendor.js','app.min.js'], {cwd: 'build', read: false})))
    .pipe(gulp.dest('./build'))
})
gulp.task('html', function () {
  gulp.src('app/**/*.html')

    .pipe(gulp.dest('./build'));
})
gulp.task('appjs', function () {
  gulp.src(paths.appjs)
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.print())
    .pipe(gulp.dest('./build'));


});
gulp.task('vendorjs', function () {
  gulp.src(mainBowerFiles(), {base: 'app/vendor'})
    .pipe(plugins.print())
    .pipe(plugins.concat('app.vendor.js'))
    // .pipe(plugins.uglify())
    .pipe(gulp.dest('./build'));
  // point to the origin files with gulp.src
  // pipe()
  // gulp.dest()

});

gulp.task('serve', function () {
  browserSync.init({
    server: './build'
  });
})

gulp.task('build', ['scripts', 'html']);
