const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('csslibrary/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['csslibrary/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
