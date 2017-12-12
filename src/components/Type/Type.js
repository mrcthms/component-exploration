import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Type.css'

const getClassName = ({ order, size }) => {
  if (!size) {
    return `text-${order}`
  }
  return `text-${order}-${size}`
}
const Type = props => {
  const Tag = `${props.element}`

  return (
    <Tag className={cx(getClassName(props), { 'text-prose': props.prose })}>
      {props.children}
    </Tag>
  )
}

Type.propTypes = {
  element: PropTypes.string.isRequired,
  order: PropTypes.oneOf(['title', 'subtitle', 'body', 'label']).isRequired,
  size: PropTypes.oneOf(['larger', 'smaller', 'smallest']),
  prose: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Type.defaultProps = {
  element: 'div'
}

export default Type
