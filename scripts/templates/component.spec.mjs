const specTemplate = ({ content, name }) => `import { render } from '@testing-library/react'
import React from 'react'
import ${name} from './${name}'

describe('${name}', () => {
  test('finds ${content}', () => {
    const { getByText } = render(<${name} text={'${content}'} />)
    expect(getByText('${content}'))
  })
})
`

export default specTemplate
