import packageJson from '../../package.json'

const storyConfig = {
  corePrefix: 'UI|',
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
      header: true,
      inline: true,
      headerRender: ({ name }) => name.replace('UI|', ''),
      textRender: ({ name, description }) =>
        `<h4>import ${name} from '${packageJson.name}/cjs/ui/${name}'</h4>${description || ''}`
    }
  }
}

const storyConfigHelpers = {
  getConfig: ({ name, description }) => ({
    ...storyConfig,
    info: {
      ...storyConfig.info,
      text: storyConfig.options.info.textRender({ name, description })
    }
  })
}

export { storyConfig, storyConfigHelpers }
