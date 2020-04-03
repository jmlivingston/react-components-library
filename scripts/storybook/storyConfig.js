const storyConfig = {
  parameters: {
    options: {
      showPanel: true,
    },
  },
}

function getConfig({ component, title }) {
  return { ...storyConfig, title: `UI/${title}`, component }
}

export { storyConfig, getConfig }
