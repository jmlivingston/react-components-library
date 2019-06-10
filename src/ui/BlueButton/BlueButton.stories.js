import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import baseOptions from '../../documentation/baseOptions'
import BlueButton from './BlueButton'

storiesOf('Buttons', module).add(
  'BlueButton',
  () => <BlueButton text="This is a blue button" onClick={action('button-click')} />,
  {
    ...baseOptions,
    info: {
      ...baseOptions.info,
      text: "import BlueButton from 'jl-react-components-library/cjs/ui/BlueButton'"
    }
  }
)
