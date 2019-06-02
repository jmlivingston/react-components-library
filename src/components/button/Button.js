import PropTypes from 'prop-types'
import React from 'react'
import './Button.scss'

function Button({ onClick, text }) {
  const test = { id: 1 }
  const test2 = { ...test, name: 'foo' }
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
