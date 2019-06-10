/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import Test from './Test'

describe('Test', () => {
  test('finds TODO: Test', () => {
    const { getByText } = render(<Test text={'TODO: Test'} />)
    expect(getByText('TODO: Test'))
  })
})
