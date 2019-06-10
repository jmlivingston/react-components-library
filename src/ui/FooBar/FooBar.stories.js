import { storiesOf } from '@storybook/react'
import React from 'react'
import baseOptions from '../../documentation/baseOptions'
import FooBar from './FooBar'

storiesOf('FooBar', module).add('FooBar', () => <FooBar text="TODO: FooBar" />, {
  ...baseOptions,
  info: {
    ...baseOptions.info,
    text: "import FooBar from 'jl-react-components-library/cjs/ui/FooBar'"
  }
})
