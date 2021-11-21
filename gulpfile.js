var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

let cssFiles = [
		'./node_modules/normalize.css/normalize.css',
		'./src/css/style.css',
		'./src/css/media.css',
];

function clear(){
	return del('./build/*')
};

function styles() {
	return gulp.src(cssFiles)
				.pipe(sourcemaps.init())
				.pipe(concat('style.css'))
		        .pipe(autoprefixer({
		        	browsers: ['> 0.1%'],
		            cascade: false
		        }))
		        .pipe(cleanCSS({
		        	level: 2
		        }))
		        .pipe(sourcemaps.write())
				.pipe(gulp.dest('./build/css', '../OpenServer/JS/css' ))
				.pipe(gulp.dest('../OpenServer/JS/css' ))
				.pipe(browserSync.stream());
};

function img() {
	return gulp.src('./src/img/**/*')
				.pipe(gulp.dest('./build/img', '../OpenServer/domains/JS/img'))
				.pipe(gulp.dest('../OpenServer/domains/JS/img'))
				.pipe(browserSync.stream());
};
function html() {
	return gulp.src('./index.html')
				.pipe(gulp.dest('./build'))
				.pipe(gulp.dest('../OpenServer/domains/JS'))
				.pipe(browserSync.stream());
};
function js(){
	return gulp.src('./src/js/**/*')
			.pipe(gulp.dest('./build/js', '../OpenServer/domains/JS/js'))
			.pipe(gulp.dest('../OpenServer/domains/JS/js'))
			.pipe(browserSync.stream());
};

function watch(){
	gulp.watch('./src/css/**/*.css', styles)
	gulp.watch('index.html', html)
	gulp.watch('./src/js/main.js', js)
	gulp.watch('src/img/**/*')
	browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
};

let build = gulp.series(clear,
	gulp.parallel(styles, img, html, js));

gulp.task ('build', build);
gulp.task('watch', gulp.series(build, watch));