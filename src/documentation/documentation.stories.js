import { storiesOf } from '@storybook/react'
import marked from 'marked'
import React from 'react'
import changeLog from '../../CHANGELOG.md'
import packageJson from '../../package.json'
import readMe from '../../README.md'
import developerReadMe from '../../scripts/build/README_PACKAGE.md'
import { storyConfig } from '../../scripts/storybook/storyConfig'

function versionizeReadMe(readMeContent) {
  const readMeLines = readMeContent.split('\n')
  return [readMeLines[0] + ` (v${packageJson.version})`, ...readMeLines.slice(1)].join('\n')
}

storiesOf('Documentation | Welcome', module).add('Project Developer', () => <div />, {
  ...storyConfig.options,
  options: {
    ...storyConfig.options.options,
    isToolshown: false,
    showPanel: false
  },
  info: {
    ...storyConfig.options.info,
    header: false,
    text: marked(versionizeReadMe(readMe)), // HACK: Until this bug is fixed: https://github.com/storybookjs/storybook/issues/6981
    inline: true,
    disable: false,
    source: false
  }
})

storiesOf('Documentation | Welcome', module).add('Package Developer', () => <div />, {
  ...storyConfig.options,
  options: {
    ...storyConfig.options.options,
    isToolshown: false,
    showPanel: false
  },
  info: {
    ...storyConfig.options.info,
    header: false,
    text: marked(versionizeReadMe(developerReadMe)), // HACK: Until this bug is fixed: https://github.com/storybookjs/storybook/issues/6981
    inline: true,
    disable: false,
    source: false
  }
})

storiesOf('Documentation | Welcome', module).add('Change Log', () => <div />, {
  ...storyConfig.options,
  options: {
    ...storyConfig.options.options,
    isToolshown: false,
    showPanel: false
  },
  info: {
    ...storyConfig.options.info,
    header: false,
    text: marked(changeLog), // HACK: Until this bug is fixed: https://github.com/storybookjs/storybook/issues/6981
    inline: true,
    disable: false,
    source: false
  }
})
