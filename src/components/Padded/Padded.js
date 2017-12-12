import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Padded.css'

const getPaddedClassName = ({ top, right, bottom, left, className }, { props: { className: childClassName } }) => {
  return cx(
    {
      [`padded-top-${top}`]: top,
      [`padded-right-${right}`]: right,
      [`padded-bottom-${bottom}`]: bottom,
      [`padded-left-${left}`]: left
    },
    className,
    childClassName
  )
}

const Padded = props => {
  return Children.map(props.children, child => cloneElement(
    child,
    {
      className: getPaddedClassName(props, child)
    }
  ))
}

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']

Padded.propTypes = {
  top: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes)
}

export default Padded
