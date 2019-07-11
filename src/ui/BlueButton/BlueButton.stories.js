import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../scripts/storybook/storyConfig'
import BlueButton from './BlueButton'

const name = 'BlueButton'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

function BlueButtonDemo() {
  return <BlueButton text="This is a blue button" onClick={action('button-click')} />
}

storiesOf(category, module).add('BlueButton', BlueButtonDemo, config)
