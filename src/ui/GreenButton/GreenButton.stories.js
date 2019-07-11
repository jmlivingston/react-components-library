import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../scripts/storybook/storyConfig'
import GreenButton from './GreenButton'

const name = 'GreenButton'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

function GreenButtonDemo() {
  return <GreenButton text="This is a blue button" onClick={action('button-click')} />
}

storiesOf(category, module).add('GreenButton', GreenButtonDemo, config)
