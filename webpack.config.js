const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu App de fotos de mascotas',
      short_name: 'Petgram 🐶',
      description: 'Con petgram puedes encontrar animales bien kwais',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'public/icon.jpg'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://petgram-geaglts-geagl.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
    },
    liveReload: true,
  },
  devtool: 'eval-cheap-source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
