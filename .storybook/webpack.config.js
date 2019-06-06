const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = false
const isCssModulesEnabled = true

function addCssModules({ config }) {
  config.module.rules = [
    ...config.module.rules.filter(rule => !rule.test.toString().includes('.css')), // Filter out existing css rules
    {
      test: /^(?!.*?\.module).*\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.module\.css$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            camelCase: true,
            sourceMap: isDevelopment
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.module\.s(a|c)ss$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            camelCase: true,
            sourceMap: isDevelopment
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    }
  ]

  config.plugins = [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]

  config.resolve.extensions = [...new Set([...config.resolve.extensions, '.scss'])]

  return config
}

module.exports = async ({ config }) => {
  if (isCssModulesEnabled) {
    config = addCssModules({ config })
  }
  return config
}
