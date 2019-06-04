import _kebabCase from 'lodash/kebabCase.js'

const componentTemplate = ({ content, name, isEmpty }) => {
  return `import React from 'react'
import './${name}.scss'

function ${name}() {
  return ${isEmpty ? `<>${content}</>` : `<div className="${_kebabCase(name)}">${content}</div>`}
}

export default ${name}
`
}

export default componentTemplate
