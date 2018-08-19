const gulp = require('gulp');
const cssScss = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('/src/sass/**/*.scss')
        .pipe(cssScss().on('error', cssScss.logError))
        .pipe(gulp.dest('/src/App.css'));
});

gulp.task('default', ()=>
     gulp.watch('/src/sass/**/*.scss', ['styles'])
)



function defaultTask(cb) {
    // place code for your default task here
    cb();
}



exports.default = defaultTask