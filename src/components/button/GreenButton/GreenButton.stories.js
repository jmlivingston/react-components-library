/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'
import GreenButton from './GreenButton'

storiesOf('GreenButton', module).add('Default', () => (
  <GreenButton text="This is a green button" onClick={console.log} />
))
