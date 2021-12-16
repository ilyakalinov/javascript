var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

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
				.pipe(gulp.dest('./build/css'))
				.pipe(gulp.dest('../OpenServer/JS/css' ))
				.pipe(browserSync.stream());
};

function img() {
	return gulp.src('./src/img/**/*')
				.pipe(gulp.dest('./build/img'))
				.pipe(gulp.dest('../OpenServer/domains/JS/img'))
				.pipe(browserSync.stream());
};
function html() {
	return gulp.src('src/index.html')
				.pipe(gulp.dest('./build'))
				.pipe(gulp.dest('../OpenServer/domains/JS'))
				.pipe(browserSync.stream());
};
function js(){
	return gulp.src('./src/index.js')
			//.pipe(gulp.dest('./build/js'))
			.pipe(browserSync.stream());
};
function jsAll(){
	return gulp.src('./src/js/*')
			// .pipe(gulp.dest('./build/js'))
			// .pipe(gulp.dest('../OpenServer/domains/JS/js'))
			.pipe(browserSync.stream());
};
function json(){
	return gulp.src('./src/js/*.json')
			.pipe(gulp.dest('./build/js'))
			.pipe(gulp.dest('../OpenServer/domains/JS/js'))
			.pipe(browserSync.stream());
};
function script() {
	return gulp.src('./src/index.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}
function watch(){
	gulp.watch('./src/css/**/*.css', styles)
	gulp.watch('./src/index.html', html)
	gulp.watch('./src/index.js', js)
	gulp.watch('./src/js/*.js', jsAll)
	gulp.watch('src/img/**/*')
	browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
};

let build = gulp.series(clear,
	gulp.parallel(styles, img, html, js, jsAll, json));

gulp.task('build', build);
gulp.task('prod', gulp.series(build, script));
gulp.task('watch', gulp.series(build,
	gulp.parallel(script, watch)));