import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters, configure } from '@storybook/react'

addDecorator(withInfo)
addDecorator(withA11y)
addParameters({
  info: {
    inline: true
  }
})

require('../src/documentation')

// automatically import all files ending in *.stories.js
const req = require.context('../src/ui', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
