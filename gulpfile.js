const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')


function comprimirJs() {
    return gulp.src('./src/script/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'))
}

function comprimeImagem(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

function comprimeSass(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

exports.default = gulp.series(comprimeImagem, comprimeSass, comprimirJs);