/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'
import BlueButton from './BlueButton'

storiesOf('BlueButton', module).add('Default', () => <BlueButton text="This is a blue button" onClick={console.log} />)
