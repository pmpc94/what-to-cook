require('laravel-mix-imagemin')
const mix = require('laravel-mix')
const config = require('./webpack.config')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

Mix.listen('configReady', config => {
  const scssRule = config.module.rules.find(
    r => r.test.toString() === /\.scss$/.toString()
  )
  const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader')
    .options
  scssOptions.implementation = require('sass')
  scssOptions.prependData = '@import "./resources/scss/overrides.scss";'

  const sassRule = config.module.rules.find(
    r => r.test.toString() === /\.sass$/.toString()
  )
  const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader')
    .options
  sassOptions.implementation = require('sass')
  sassOptions.prependData = '@import "./resources/scss/overrides.scss"'
})

mix
  .setPublicPath('public')
  .webpackConfig(
    Object.assign(
      {
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            }
          ]
        },
        plugins: [
          new VuetifyLoaderPlugin({
            progressiveImages: true
          })
        ]
      },
      config
    )
  )
  .js('resources/js/clients.js', 'public/js')
  .sass('resources/scss/clients.scss', 'public/css')
  .extract([
    'vue',
    'vuex',
    'axios',
    'moment',
    'vuetify',
    'vue-i18n',
    'vue-router',
    'vee-validate'
  ])
  .imagemin('assets/**/*', { context: 'resources' })
  .version()
  .sourceMaps()