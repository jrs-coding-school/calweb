var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();
// gulp path config for easy awesome
var paths = {
  app: './app',
  scripts: ['app/**/*.module.js', 'app/partials/**/*.js', 'app/cart/**/*.js', 'app/products/**/*.js', '!app/vendor','!app/vendor/**}'],
  index: 'app/index.html',
  partials: ['app/**/*.html', '!app/index.html'],
  build: './build'
};

// injects vendor and app js files into index and also writes to build directory
gulp.task('index', function () {
  gulp.src(paths.index)
    .pipe(plugins.inject(gulp.src(['app.vendor.js','app.min.js'], {cwd: 'build', read: false}), {
      relative: false
    }))
    .pipe(gulp.dest('build'))

})
// concatenates and minifies all 3rd party libraries
gulp.task('vendor', function () {
  gulp.src(mainBowerFiles(), {base: 'app/vendor'})
    // .pipe(plugins.print())
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.vendor.js'))
    .pipe(gulp.dest(paths.build))
})
// concatenates and minifies all app js files
gulp.task('scripts', function () {
  gulp.src(paths.scripts)
    // .pipe(plugins.angularFilesort())
    // .pipe(plugins.print())
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.min.js'))
    .pipe(gulp.dest(paths.build));
});

// adds all *.html files in app/ to the $templateCache so it's faster
gulp.task('partials', function () {
  gulp.src(paths.partials)
    .pipe(plugins.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      prefix: '/partials'
    }))
    .pipe(plugins.ngHtml2js({
      moduleName: "myAzon"
    }))
    .pipe(gulp.dest(paths.app + '/partials'));
});

// starts server, builds files and watches js in app for changes
// to recompile into build directory to reload server
gulp.task('serve',['build'], function () {
  browserSync.init({
    server: './build',
    reloadDelay: 1000,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true,
      links:false
    }
  });

  gulp.watch(paths.app + '/**/*.js', ['scripts']);
  gulp.watch(paths.app + '/**/*.html', ['partials', 'scripts'])
  gulp.watch(paths.build + '/*.js').on('change', browserSync.reload);
});

gulp.task('allScripts', ['vendor', 'scripts']);
gulp.task('build', ['partials', 'allScripts', 'index']);
gulp.task('default', ['serve']);
