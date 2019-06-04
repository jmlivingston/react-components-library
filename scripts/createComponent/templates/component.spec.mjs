const specTemplate = ({ content, name }) => `import { render } from '@testing-library/react'
import React from 'react'
import ${name} from './${name}'

describe('${name}', () => {
  test('finds TODO', () => {
    const { getByText } = render(<${name} />)
    expect(getByText('${content}'))
  })
})
`

export default specTemplate
