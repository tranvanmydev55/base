const mix = require('laravel-mix');

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

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'scss@': path.resolve('resources/assets/admin/sass'),
            '@': path.resolve('resources/assets/admin/js'),
            'scss&': path.resolve('resources/assets/cliend/sass'),
            '&': path.resolve('resources/assets/client/js'),
        },
    },
});

mix.sass('resources/assets/admin/sass/app.scss', 'public/admin/css');
mix.copyDirectory('resources/assets/admin/image', 'public/admin/image');

mix.js('resources/assets/admin/js/app.js', 'public/admin/js')
    .copyDirectory('node_modules/admin-lte/dist/', 'public/dist/')
    .copyDirectory('node_modules/admin-lte/plugins/', 'public/plugins/');

mix.js('resources/assets/client/js/app.js', 'public/client/js')


mix.version();
mix.disableNotifications();