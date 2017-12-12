import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Type.css'

const getClassName = ({ order, size, prose, className }, { props: { className: childClassName } }) => {
  return cx(
    {
      [`text-${order}`]: !size,
      [`text-${order}-${size}`]: size,
      'text-prose': prose
    },
    className,
    childClassName
  )
}

const Type = props => {
  return Children.map(props.children, child => cloneElement(child, {
    className: getClassName(props, child)
  }))
}

Type.propTypes = {
  order: PropTypes.oneOf(['title', 'subtitle', 'body', 'label']).isRequired,
  size: PropTypes.oneOf(['larger', 'smaller', 'smallest']),
  prose: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Type
