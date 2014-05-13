var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {

});

gulp.task('deploy', function () {
	return browserify('./src/blog-resources/resources.js')
		.bundle({standalone: "blog-resources"})
		.pipe(source('blog-resources.js'))
		.pipe(gulp.dest('./exports/'));
});