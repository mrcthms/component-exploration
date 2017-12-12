import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Spaced.css'

const getSpacedClassName = ({ top, right, bottom, left, className }, { props: { className: childClassName } }) => {
  return cx(
    {
      [`spaced-top-${top}`]: top,
      [`spaced-right-${right}`]: right,
      [`spaced-bottom-${bottom}`]: bottom,
      [`spaced-left-${left}`]: left
    },
    className,
    childClassName
  )
}

const Spaced = props => {
  return Children.map(props.children, child => cloneElement(
    child,
    {
      className: getSpacedClassName(props, child)
    }
  ))
}

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']

Spaced.propTypes = {
  top: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes)
}

export default Spaced
