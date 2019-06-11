import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import BlueButton from './BlueButton'

storiesOf('Buttons', module).add(
  'BlueButton',
  () => <BlueButton text="This is a blue button" onClick={action('button-click')} />,
  {
    ...baseConfig.options,
    info: {
      ...baseConfig.options.info,
      text: "import BlueButton from 'jl-react-components-library/cjs/ui/BlueButton'"
    }
  }
)
