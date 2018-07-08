'use strict'

const { join, resolve } = require('path')
const Webpack = require('webpack')

const paths = {
  dist: join(__dirname, '..', 'dist'),
  public: join(__dirname, '..', 'public'),
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src')
}

const pluginsList = {}

module.exports = {
  paths,
  pluginsList,

  entry: join(paths.src, 'ts', 'index'),

  resolve: {
    modules: [resolve(__dirname), '..', 'node_modules'],
    extensions: ['.js', '.ts']
  },

  preLoader: {
    test: /\.js$/,
    loader: 'source-map-loader'
  },

  jsLoader: {
    test: /\.js?$/,
    include: paths.src,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }],
          ['@babel/stage-0', {
            "decoratorsLegacy": true,
            "pipelineProposal": "minimal"
          }],
          '@babel/preset-typescript'
        ],
        plugins: [
          ['@babel/plugin-proposal-class-properties', {
            loose: true
          }],
          ['@babel/plugin-transform-runtime', {
            helpers: false,
            loose: true,
            polyfill: false,
            regenerator: true
          }]
        ]
      }
    }
  },

  tsLoader: {
    test: /\.ts?$/,
    use: 'awesome-typescript-loader',
    exclude: /node_modules/
  },

  plugins: []
}
