import { storiesOf } from '@storybook/react'
import React from 'react'
import readMe from '../../README.md'

const Welcome = () => (
  <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
    <h1>Installation</h1>
    <div
      style={{
        backgroundColor: 'gray',
        color: '#fff',
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: '5px',
        fontFamily: '"Lucida Console", Monaco, monospace'
      }}>
      npm i jl-react-components-library
    </div>
  </div>
)

export default Welcome

storiesOf('Welcome', module).add('Read Me', () => null, {
  options: {
    isToolshown: false,
    showAddonPanel: false
  },
  info: {
    header: false,
    text: `${readMe}`,
    source: false
  }
})
