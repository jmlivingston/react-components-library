import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import GreenButton from './GreenButton'

describe('GreenButton', () => {
  test('finds text', () => {
    const { getByText } = render(<GreenButton text="test" onClick={() => {}} />)
    expect(getByText('test'))
  })

  test('onClick fires', () => {
    const handler = jest.fn(e => e.preventDefault())
    const { getByText } = render(<GreenButton text="test" onClick={handler} />)
    fireEvent.click(getByText('test'))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
