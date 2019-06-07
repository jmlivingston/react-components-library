import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import GreenButton from './GreenButton'
import baseOptions from '../../documentation/baseOptions'

storiesOf('Buttons', module).add(
  'GreenButton',
  () => <GreenButton text="This is a green button" onClick={action('button-click')} />,
  {
    ...baseOptions,
    info: {
      text: "import GreenButton from 'jl-react-components-library/cjs/ui/GreenButton'"
    }
  }
)
