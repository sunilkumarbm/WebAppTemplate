// Import required modules

var gulp = require("gulp"),
	sass = require("gulp-sass");


// Create gulp task
// Complie the SASS file
gulp.task("sass", function(){
	gulp.src("src/sass/styles.scss")
		.pipe(sass())
		.pipe(gulp.dest("dist/css"));
	;
});


// Copy HTML to dist
gulp.task("html", function(){
	gulp.src("src/html/index.html")
		.pipe(gulp.dest("dist"));
	;
});

gulp.task("js", function() {
	gulp.src("src/scripts/**/*.js")
		.pipe(gulp.dest("dist/scripts"));
});

gulp.task("watch", ["sass", "js", "html"], function (){
	gulp.watch(["src/sass/**/*.scss"], ["sass"]);
	gulp.watch(["src/html/index.html"], ["html"]);
	gulp.watch(["src/scripts/**/*.js"], ["js"]);
});