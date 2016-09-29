var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', () => {
    browserSync.init({
        proxy: 'http://localhost:8080'
    })

    gulp.watch('src/*.html', reload);
})