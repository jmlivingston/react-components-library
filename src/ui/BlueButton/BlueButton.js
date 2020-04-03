import PropTypes from 'prop-types'
import React from 'react'
import './BlueButton.scss'

function BlueButton({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

BlueButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BlueButton
