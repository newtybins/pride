const gulp = require('gulp');
const uglify = require('gulp-uglify');
const typescript = require('gulp-typescript');
const pipeline = require('readable-stream').pipeline;

exports.default = () => {
    const ts = typescript.createProject('tsconfig.json');

    return pipeline(
        gulp.src('src/**/*.ts'),
        ts(),
        uglify({ mangle: { toplevel: true, keep_fnames: true } }),
        gulp.dest('dist')
    );
};
