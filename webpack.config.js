const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false // this option will solve the issue
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    port: 3000
  }
}
