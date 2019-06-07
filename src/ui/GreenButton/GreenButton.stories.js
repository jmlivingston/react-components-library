/* eslint-disable no-console */
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import GreenButton from './GreenButton'

storiesOf('GreenButton', module).add(
  'Default',
  () => <GreenButton text="This is a green button" onClick={action('button-click')} />,
  {
    info: {
      text: "import GreenButton from 'jl-react-components-library/cjs/ui/GreenButton'"
    }
  }
)
