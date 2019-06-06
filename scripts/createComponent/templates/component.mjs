import _kebabCase from 'lodash/kebabCase.js'

const componentTemplate = ({ content, name, isEmpty, styleExtension }) => {
  return `import React from 'react'
import ${styleExtension.includes('module') ? 'styles from ' : ''}'./${name}.${styleExtension}'

function ${name}() {
  return ${
    isEmpty
      ? `<>${content}</>`
      : `<div className=${
          styleExtension.includes('module') ? `{styles['${_kebabCase(name)}']}` : `"${_kebabCase(name)}"`
        }>${content}</div>`
  }
}

export default ${name}
`
}

export default componentTemplate
