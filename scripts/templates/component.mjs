import _kebabCase from 'lodash/kebabCase.js'

const componentTemplate = ({ content, isEmpty, name, styleExtension }) => {
  return `import PropTypes from 'prop-types'
import React from 'react'
import ${styleExtension.includes('module') ? 'styles from ' : ''}'./${name}.${styleExtension}'

function ${name}(${isEmpty ? '' : '{ text }'}) {
  return ${
    isEmpty
      ? `<>${content}</>`
      : `<div className=${
          styleExtension.includes('module') ? `{styles['${_kebabCase(name)}']}` : `"${_kebabCase(name)}"`
        }>{text}</div>`
  }
}

${
  isEmpty
    ? ''
    : `${name}.propTypes = {
  text: PropTypes.string
}`
}

export default ${name}
`
}

export default componentTemplate
