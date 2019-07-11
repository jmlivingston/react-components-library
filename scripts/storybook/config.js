import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters, configure } from '@storybook/react'
import './storybook.scss'
import { storyConfig } from './storyConfig'

addDecorator(withInfo)
addParameters(storyConfig.options)

function loadStories() {
  require('../../src/documentation/documentation.stories')

  const coreReq = require.context('../../src/ui', true, /\.stories\.js$/)
  coreReq
    .keys()
    .sort()
    .forEach(filename => coreReq(filename))
}

configure(loadStories, module)
