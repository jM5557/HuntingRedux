var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var babelify = require("babelify");

var paths = {
    scripts: {
        src:  'src/js/**/*.js',
        dest: 'assets/js'
    },
    react: {
        src: 'src/components/**/*.jsx',
        dest: 'src/js/components'
    }
}

gulp.task('scripts', function () {
    var bundler = browserify({
        entries: 'src/js/main.js'
    });

    var bundle = function () {
        return bundler
            .transform(babelify, {presets: ["@babel/preset-env", "@babel/preset-react"]})
            .bundle()
            .on('error', function () {})
            .pipe(source('main.js'))
            .pipe(gulp.dest(paths.scripts.dest));
    }

    if(global.isWatching) {
        bundler = watchify(bundler);
        bundler.on('update', bundle);
    }

    return bundle();
});

gulp.task('build', gulp.series(
    'scripts'
));


