import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../.storybook/baseConfig'
import readMe from '../../README.md'

storiesOf('Welcome', module).add('Read Me', () => <div />, {
  ...baseConfig.options,
  options: {
    ...baseConfig.options.options,
    isToolshown: false,
    showPanel: false
  },
  info: {
    ...baseConfig.options.info,
    text: `${readMe}`,
    inline: true,
    disable: false,
    source: false
  }
})
