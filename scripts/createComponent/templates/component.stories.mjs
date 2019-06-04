const storyTemplate = ({ name }) => `/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'
import ${name} from './${name}'

storiesOf('${name}', module).add('Default', () => <${name} />)
`

export default storyTemplate
