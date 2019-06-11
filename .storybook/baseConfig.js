import packageJson from '../package.json'

const baseConfig = {
  options: {
    options: {
      isToolshown: true,
      showPanel: true,
      theme: {
        brandTitle: packageJson.name
      }
    },
    info: {
      disable: process.env.STORYBOOK_DEBUG === 'true',
      header: false,
      inline: true
    }
  }
}

export default baseConfig
