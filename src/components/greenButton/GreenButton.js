import PropTypes from 'prop-types'
import React from 'react'
import './GreenButton.scss'

function GreenButton({ onClick, text }) {
  return (
    <button className="green-button" onClick={onClick}>
      {text}
    </button>
  )
}

GreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default GreenButton
