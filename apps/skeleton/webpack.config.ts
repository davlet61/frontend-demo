import HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import * as webpack from 'webpack';
import 'webpack-dev-server';

import pkg from './package.json';

const { ModuleFederationPlugin } = webpack.container;
const { dependencies: deps } = pkg;

const config: webpack.Configuration = {
  entry: './src/index.ts',
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
      name: 'skeleton',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Navbar': './src/components/Navbar.tsx',
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
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default config;
