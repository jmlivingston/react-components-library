import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button as StoryBookButton, Welcome } from '@storybook/react/demo'

import Button from '../src/components/button/Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('StoryBookButton', module)
  .add('with text', () => (
    <StoryBookButton onClick={action('clicked')}>Hello Button!</StoryBookButton>
  ))
  .add('with some emoji', () => (
    <StoryBookButton onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </StoryBookButton>
  ))

storiesOf('Button', module).add('Default', () => (
  <Button text="This is a button" onClick={console.log} />
))
