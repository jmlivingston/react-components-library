import _kebabCase from 'lodash/kebabCase.js'

const scssTemplate = ({ name, isEmpty }) => {
  return isEmpty
    ? ''
    : `.${_kebabCase(name)} {
  color: red;
}
`
}

export default scssTemplate
