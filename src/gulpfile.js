var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');





gulp.task('sass',function(){

	return gulp.src('assets/scss/*.sass').
		   pipe(sass().on('error', sass.logError)).
		   pipe(gulp.dest('assets/css'));

});


function popUp(){

	console.log("hello");
}

gulp.task('watch',function(){

	return gulp.watch('assets/scss/*/*.sass',['sass']);

});
