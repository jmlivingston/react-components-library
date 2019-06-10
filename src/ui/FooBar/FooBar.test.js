/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import FooBar from './FooBar'

describe('FooBar', () => {
  test('finds TODO: FooBar', () => {
    const { getByText } = render(<FooBar text={'TODO: FooBar'} />)
    expect(getByText('TODO: FooBar'))
  })
})
