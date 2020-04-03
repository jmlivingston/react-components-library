import { action } from '@storybook/addon-actions'
import React from 'react'
import { getConfig } from '../../../scripts/storybook/storyConfig'
import BlueButton from './BlueButton'

export default getConfig({ title: 'BlueButton', component: BlueButton })

export function Basic() {
  return <BlueButton onClick={action('button-click')}>This is a blue button</BlueButton>
}
