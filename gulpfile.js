const gulp = require("gulp");
const scss = require("gulp-sass");
const css_clean = require("gulp-clean-css");
const css_concat = require("gulp-concat-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const del = require("del");

const paths = {
  styles: {
    src: "src/**/*.scss",
    dest: "assets/css/"
  },
  scripts: {
    src: "src/**/*.js",
    dest: "assets/js/"
  },
  images: {
    src: "src/img/**/*.{jpg,jpeg,png,svg,gif}",
    dest: "assets/img/"
  },
  jsons: {
    src: "src/**/*.json",
    dest: "assets/jsons/"
  }
};

let clean = () => del(["assets"]);

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(scss())
    .pipe(css_clean())
    .pipe(css_concat("main.min.css"))
    .pipe(gulp.dest(paths.styles.dest));
}

function images() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function jsons() {
  return gulp.src(paths.jsons.src).pipe(gulp.dest(paths.jsons.dest));
}

gulp.task("clean", clean);
gulp.task("default", gulp.series(styles, scripts, images, jsons));
