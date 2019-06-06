const storyTemplate = ({ content, isEmpty, name }) => `/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'
import ${name} from './${name}'

storiesOf('${name}', module).add(
  'Default', 
  () => <${name} ${isEmpty ? '' : `text="${content}"`} />,
  {
    info: {
      text: 'This is some extra information about this ${name} component.',
      inline: true
    }
  }
)
`

export default storyTemplate
