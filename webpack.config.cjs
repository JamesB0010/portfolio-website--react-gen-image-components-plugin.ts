const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    module: true,
    library: {
      type: 'module'
    },
    clean: true
  },
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    webpack: 'webpack',
    'fast-glob': 'fast-glob',
    fs: 'fs'
  }
};
