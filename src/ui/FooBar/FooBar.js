import PropTypes from 'prop-types'
import React from 'react'
import styles from './FooBar.module.scss'

function FooBar({ text }) {
  return <div className={styles['foo-bar']}>{text}</div>
}

FooBar.propTypes = {
  text: PropTypes.string
}

export default FooBar
