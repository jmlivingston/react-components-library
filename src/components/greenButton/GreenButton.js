import PropTypes from 'prop-types'
import React from 'react'
import styles from './GreenButton.module.scss'

function GreenButton({ onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

GreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default GreenButton
