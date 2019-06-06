const baseWebPackConfig = require('../webpack.config')

function addCssModules({ config }) {
  config.module.rules = [
    ...config.module.rules.filter(rule => !rule.test.toString().includes('.css')), // Filter out existing css rules
    ...baseWebPackConfig.module.rules.filter(rule => !rule.test.toString().includes('.js'))
  ]

  config.plugins = [...config.plugins, ...baseWebPackConfig.plugins]

  config.resolve.extensions = [...new Set([...config.resolve.extensions, ...baseWebPackConfig.resolve.extensions])]

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
  ...addStorySource({ config }),
  ...addCssModules({ config })
})
