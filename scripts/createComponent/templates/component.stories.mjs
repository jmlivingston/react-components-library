const storyTemplate = ({ content, isEmpty, name }) => `/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'
import ${name} from './${name}'
import baseOptions from '../../documentation/baseOptions'

storiesOf('${name}', module).add(
  '${name}', 
  () => <${name} ${isEmpty ? '' : `text="${content}"`} />,
  {
    ...baseOptions,
    info: {
      text: "import ${name} from 'jl-react-components-library/cjs/ui/${name}'",
      inline: true
    }
  }
)
`

export default storyTemplate
