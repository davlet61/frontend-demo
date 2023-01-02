import HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

import pkg from './package.json';

const { ModuleFederationPlugin } = webpack.container;
const { dependencies: deps } = pkg;

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    publicPath: 'http://localhost:3000/',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
      name: 'notes',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        // "./store": "./src/store",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        ui: {
          singleton: true,
          eager: true,
        },
        zod: {
          singleton: true,
          eager: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default config;
