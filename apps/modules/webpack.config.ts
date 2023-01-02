import 'webpack-dev-server';

import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

import pkg from './package.json';

const { ModuleFederationPlugin } = webpack.container;
const { dependencies: deps } = pkg;

const config: webpack.Configuration = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    publicPath: 'http://localhost:3001/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3001,
    hot: true,
    watchFiles: './src/**/*.{tsx, ts}',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'modules',
      filename: 'remoteEntry.js',
      remotes: {
        notes: 'notes@http://localhost:3000/remoteEntry.js',
      },
      exposes: {
        './comps': './src/components/index.ts',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        lib: {
          singleton: true,
          requiredVersion: false,
        },
        // ui: {
        //   singleton: true,
        //   requiredVersion: false,
        // },
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default config;
