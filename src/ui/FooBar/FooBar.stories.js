import { storiesOf } from '@storybook/react'
import React from 'react'
import FooBar from './FooBar'
import baseOptions from '../../documentation/baseOptions'

storiesOf('FooBar', module).add('FooBar', () => <FooBar text="TODO: FooBar" />, {
  ...baseOptions,
  info: {
    text: "import FooBar from 'jl-react-components-library/cjs/ui/FooBar'",
    inline: true
  }
})
