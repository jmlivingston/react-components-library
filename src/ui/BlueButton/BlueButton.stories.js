import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import BlueButton from './BlueButton'

storiesOf('Buttons', module).add(
  'BlueButton',
  () => <BlueButton text="This is a blue button" onClick={action('button-click')} />,
  {
    ...baseConfig.options,
    info: {
      ...baseConfig.options.info,
      text: `import BlueButton from '${packageJson}/cjs/ui/BlueButton'`
    }
  }
)
