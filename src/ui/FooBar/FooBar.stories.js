import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../scripts/storybook/storyConfig'
import FooBar from './FooBar'

const name = 'FooBar'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

function FooBarDemo() {
  return <FooBar text="TODO: FooBar" />
}

storiesOf(category, module).add('FooBar', FooBarDemo, config)
