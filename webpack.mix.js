const mix = require("laravel-mix");
let WebpackLaravelMixManifest = require('webpack-laravel-mix-manifest');
var LiveReloadPlugin = require('webpack-livereload-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public').react("./src/app.js", "react/app.js").extract();
mix.sass(
    "src/sass/app.scss",
    "css/app.css"
);

// mix.options({
//     hmrOptions: {
//         host: 'donate.com',
//         port: 8080
//     }
// })

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            assets: path.resolve(__dirname, "src/assets"),
            components: path.resolve(__dirname, "src/components"),
            constants: path.resolve(__dirname, "src/constants"),
            helpers: path.resolve(__dirname, "src/helpers"),
            modules: path.resolve(__dirname, "src/modules"),
            services: path.resolve(__dirname, "src/services"),
            router: path.resolve(__dirname, "src/router"),
            core: path.resolve(__dirname, "src/core")
        }
    },
    output: {
        chunkFilename: '[name].js',
        filename: "[name].js",
    },
    plugins: [
        new WebpackLaravelMixManifest(),
        new LiveReloadPlugin()
    ]
});
