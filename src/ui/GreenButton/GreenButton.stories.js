import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import GreenButton from './GreenButton'

storiesOf('Buttons', module).add(
  'GreenButton',
  () => <GreenButton text="This is a green button" onClick={action('button-click')} />,
  {
    ...baseConfig.options,
    info: {
      ...baseConfig.options.info,
      text: `import GreenButton from '${packageJson}/cjs/ui/GreenButton'`
    }
  }
)
