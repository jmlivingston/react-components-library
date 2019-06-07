/* eslint-disable no-console */
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import BlueButton from './BlueButton'

storiesOf('BlueButton', module).add(
  'Default',
  () => <BlueButton text="This is a blue button" onClick={action('button-click')} />,
  {
    info: {
      text: 'This is some extra information about this BlueButton component.',
      inline: true
    }
  }
)
