import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import GreenButton from './GreenButton'

function GreenButtonDemo() {
  return <GreenButton text="This is a blue button" onClick={action('button-click')} />
}

storiesOf('Buttons', module).add('GreenButton', GreenButtonDemo, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: `import BlueButton from '${packageJson.name}/cjs/ui/BlueButton'`
  }
})
