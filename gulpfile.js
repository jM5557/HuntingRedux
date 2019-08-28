var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var paths = {
    scripts: {
        src:  'src/js/**/*.js',
        dest: 'assets/js'
    }
}

gulp.task('scripts', function() {
    return gulp.src(paths.scripts.src)
      .pipe(concat('main.js'))
      .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('react', function () {
    return gulp.src('src/components/**/*.js')
        .pipe(babel({
            preset: ['@babel/env', "@babel/react"]
        }))
        .pipe(gulp.dest(paths.scripts.dest));
})

gulp.task('watch', function () {
   return gulp.watch(paths.scripts.src, gulp.series('scripts', 'react'));
});


