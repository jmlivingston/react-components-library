import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import FooBar from './FooBar'

function FooBarDemo() {
  return <FooBar text="TODO: FooBar" />
}

storiesOf('FooBar', module).add('FooBar', FooBarDemo, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: `import FooBar from '${packageJson.name}/cjs/ui/FooBar'`
  }
})
