const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      plumber = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      maps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      fileinclude  = require('gulp-file-include'), 
      htmlmin 	 = require('gulp-htmlmin'),
		  uglify 		 = require('gulp-uglify'),
      imagemin = require('gulp-imagemin');

gulp.task('scss', function() {
  gulp.src('./src/pages/**/*.scss')
  .pipe(maps.init())
  .pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // для кроссбраузерности
	.pipe(csso()) // минификация css
  .pipe(rename({suffix:'.min', dirname: ''})) // для переименования конечных файлов css и для изменения конечной структуры проекта
  .pipe(maps.write())
  .pipe(gulp.dest('./dist/css')) // сборка проекта с указанием конечной директории
});

gulp.task('img',() => {
   gulp.src('src/assets/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(gulp.dest('dist/img'))
})

gulp.task('fonts',() => {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts')); 
})

gulp.task('html', () => {
   gulp.src('src/pages/**/*.html')
  .pipe(rename({dirname: ''}))
  .pipe(fileinclude())
  .pipe(htmlmin({ removeComments: true }))
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', () =>
  gulp.src('src/js/*.js')
  .pipe(plumber())
  .pipe(maps.init())
	.pipe(rename(
		{suffix:'.min', dirname: ''})) // для переименования конечных файлов css и для изменения конечной структуры проекта
	.pipe(uglify())
	.pipe(maps.write())
	.pipe(gulp.dest('dist/js/'))
);

gulp.task('reload', () => {
  browserSync({
    server: {
      baseDir: 'dist/'
    },
    notify: false,
  });
});

gulp.task('watch', ['reload','scss', 'html','js'], () => {
  gulp.watch(['src/**/*.scss'], ['scss'], browserSync.reload);
  gulp.watch(['src/pages/**/*.html'], ['html'], browserSync.reload);
  gulp.watch(['src/js/*.js'], ['js'], browserSync.reload);
});