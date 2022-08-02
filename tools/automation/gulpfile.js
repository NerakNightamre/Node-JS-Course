const { tree } = require('gulp');
const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb){
    console.log('building site');

    setTimeout(cb, 1200);

});

gulp.task('serve', function(){
    gulp.src('www')
    .pipe(server({
        livereload: true,
        open: true,
    }));
})