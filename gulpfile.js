var elixir = require('laravel-elixir');

require('laravel-elixir-webpack-official');

require('laravel-elixir-vue');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.webpack('vue-cookie-spec.js', 'test/bundle.js', 'test/spec');

});
