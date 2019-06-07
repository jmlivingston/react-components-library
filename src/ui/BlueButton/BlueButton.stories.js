import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import BlueButton from './BlueButton'
import baseOptions from '../../documentation/baseOptions'

storiesOf('Buttons', module).add(
  'BlueButton',
  () => <BlueButton text="This is a blue button" onClick={action('button-click')} />,
  {
    ...baseOptions,
    info: {
      text: "import BlueButton from 'jl-react-components-library/cjs/ui/BlueButton'"
    }
  }
)
