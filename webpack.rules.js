const path = require('path')
module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: {amd: false},
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.ts$/,
    include: path.resolve(__dirname, 'src'),
    enforce: 'pre',
    use: {
      loader: 'tslint-loader',
      options: {
        typeCheck: true,
        emitErrors: true,
      },
    },
  },
  {
    test: /\.(js|jsx|tsx|ts)$/,
    include: path.resolve(__dirname, 'src'),
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
];
