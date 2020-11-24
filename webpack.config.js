// On PhpStorm, when using with laravel mix, for Alias path resolving in components you have to:
// - create a webpack.config.js file separately like:

const path = require('path')

module.exports = {
  resolve: {
    extensions: ['*', '.wasm', '.mjs', '.js', '.jsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@scss': path.resolve(__dirname, 'resources/scss'),
      '@resources': path.resolve(__dirname, 'resources')
    }
  }
}

// Make sure the webpack configuration file is pointed correctly in the configuration of
// the PhpStorm in: Settings > Languages & Frameworks > Javascript > Webpack
