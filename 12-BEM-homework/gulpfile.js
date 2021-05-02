var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug');

gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});

// gulp.task('html', function(){
//     return gulp.src('app/*.html')
// })

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('pug', function() {
    return gulp.src('app/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe (gulp.dest('app/'))
    .pipe(browserSync.reload({stream:true}))
  });
  
  
  gulp.task('watch', function(){
      gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
      gulp.watch('app/*.pug', gulp.parallel('pug'))
  });
  
  gulp.task('default', gulp.parallel('browser-sync', 'watch'))