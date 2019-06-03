import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import BlueButton from './BlueButton'

describe('BlueButton', () => {
  test('finds text', () => {
    const { getByText } = render(<BlueButton text="test" onClick={() => {}} />)
    expect(getByText('test'))
  })

  test('onClick fires', () => {
    const handler = jest.fn(e => e.preventDefault())
    const { getByText } = render(<BlueButton text="test" onClick={handler} />)
    fireEvent.click(getByText('test'))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
