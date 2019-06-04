/* eslint-disable no-console */
import GreenButton from './GreenButton'
import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf('GreenButton', module).add('Default', () => (
  <GreenButton text="This is a green button" onClick={console.log} />
))
