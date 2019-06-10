import { storiesOf } from '@storybook/react'
import React from 'react'
import Test from './Test'
import baseOptions from '../../documentation/baseOptions'

storiesOf('Test', module).add('Test', () => <Test text="TODO: Test" />, {
  ...baseOptions,
  info: {
    text: "import Test from 'jl-react-components-library/cjs/ui/Test'",
    inline: true
  }
})
