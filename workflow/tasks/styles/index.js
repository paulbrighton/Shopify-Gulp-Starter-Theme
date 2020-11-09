const { src, dest } = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')

sass.compiler = require('node-sass')

const styles = () => src('src/styles/theme.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(rename('theme.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('dist/assets/'))

module.exports = styles
