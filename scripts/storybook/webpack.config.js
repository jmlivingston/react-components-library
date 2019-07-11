function addCssModules({ config }) {
  config.module.rules = [
    ...config.module.rules.filter(rule => !rule.test.toString().includes('.css')), // Filter out existing css rules
    {
      test: /\.module\.(s*)(a|c)ss$/,
      loader: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            camelCase: true,
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.(s*)(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
  ]

  config.resolve.extensions = [...new Set([...config.resolve.extensions, '.scss'])]

  return config
}

function addStorySource({ config }) {
  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  return config
}

module.exports = async ({ config }) => ({
  ...config,
  ...addCssModules({ config }),
  ...addStorySource({ config })
})
