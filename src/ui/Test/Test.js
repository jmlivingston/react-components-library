import PropTypes from 'prop-types'
import React from 'react'
import styles from './Test.module.scss'

function Test({ text }) {
  return <div className={styles['test']}>{text}</div>
}

Test.propTypes = {
  text: PropTypes.string
}

export default Test
