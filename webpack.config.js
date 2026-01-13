const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: 'eliot-pitman-mfe.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'system',
      publicPath: isProduction ? '/mfe/' : 'http://localhost:9000/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: false,
      }),
    ],
    devServer: {
      port: 9000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      hot: false,
      liveReload: false,
    },
    externals: ['react', 'react-dom'],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
