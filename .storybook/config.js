import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters, configure } from '@storybook/react'
import baseOptions from '../src/documentation/baseOptions'

addDecorator(withInfo)
addDecorator(withA11y)
addParameters(baseOptions)

require('../src/documentation/documentation.stories')

// automatically import all files ending in *.stories.js
const req = require.context('../src/ui', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
