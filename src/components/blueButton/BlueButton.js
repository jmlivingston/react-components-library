import PropTypes from 'prop-types'
import React from 'react'
import styles from './BlueButton.module.scss'

function BlueButton({ onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

BlueButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default BlueButton
