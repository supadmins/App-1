var fs = require('fs'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-minify-html'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rev = require('gulp-rev'),
    inline = require('gulp-inline-source'),
    revCollector = require('gulp-rev-collector');

//压缩页面js文件 增加hash后缀
gulp.task('uglify', function () {
    gulp.src(['src/js/**/*.js', '!src/js/controllers/*.js'])
        .pipe(rev())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));
});

//压缩页面css文件 增加hash后缀
gulp.task('cssmin', function () {
    gulp.src(['src/css/**/*.css'])
        .pipe(rev())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/css'));
});

//压缩图片文件 增加hash后缀
gulp.task('copy-images',function() {
    gulp.src('src/imgs/**/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
});

//改变页面引用路径
gulp.task('rev', function () {
    setTimeout(function () {
        gulp.src(['rev/**/*.json', 'src/**/*.html'])
            .pipe(revCollector({
                replaceReved: true
            }))
            .pipe(gulp.dest('dist'));
    }, 1000);
});

//内联css js
gulp.task('inline', function () {
    setTimeout(function () {
        gulp.src( 'dist/**/*.html')
            .pipe(inline())
            .pipe(minifyHtml())
            .pipe(gulp.dest('dist'));
    }, 1500);
});

gulp.task('default', ['uglify', 'cssmin', 'copy-images', 'rev', 'inline'], function () {
    gulp.src('src/lib/**')
        .pipe(gulp.dest('dist/lib'));

    gulp.src('src/js/controllers/*.js')
        .pipe(gulp.dest('dist/js/controllers'));
});