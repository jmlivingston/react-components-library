import PropTypes from 'prop-types'
import React from 'react'
// import './BlueButton.scss'

function BlueButton({ onClick, text }) {
  return (
    <button className="blue-button" onClick={onClick}>
      {text}
    </button>
  )
}

BlueButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default BlueButton
