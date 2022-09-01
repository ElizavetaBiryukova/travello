import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

export const normalize = () => {
    return app.gulp.src(`${app.path.src.normalize}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Normalize",
                message: "Error: <%= error.message %>"
            })))
            .pipe(cleanCss())
            .pipe(rename({
                extname: ".min.css"
            }))
        .pipe(app.gulp.dest(`${app.path.build.css}`));
};