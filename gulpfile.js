import gulp from 'gulp';
import gulpSass from 'gulp-sass'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minify from 'gulp-csso';
import rename from 'gulp-rename';
import del from 'del';
import dartSass from 'sass';

const sass = gulpSass(dartSass);

const { task, series, watch, dest } = gulp;

task('style', async function() {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(dest('css'));
});


task('clean', function() {
  return del('build');
});


task('build', series('clean', 'style'));

task('start:watch', function() {
  watch("sass/**/*.scss", series(["style"]));
})

task('default', series('build', 'start:watch'))
