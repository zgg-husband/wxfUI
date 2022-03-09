const gulp = require("gulp");
const sass = require("gulp-dart-sass");//sass->css
const minifyCSS = require('gulp-minify-css');

gulp.task('sass',async function(){
  const response = await gulp.src('components/css/**/*.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest('dist/css'));
return response
})