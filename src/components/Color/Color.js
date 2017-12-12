import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Color.css'

const getColorClassName = ({ background, content, className }, { props: { className: childClassName } }) => {
  return cx(
    {
      [`color-${content}`]: content,
      [`color-bg-${background}`]: background
    },
    className,
    childClassName
  )
}

const Color = props => {
  return Children.map(props.children, child => cloneElement(
    child,
    {
      className: getColorClassName(props, child)
    }
  ))
}

export const colors = ['pink', 'blue-lighter', 'blue', 'blue-darker', 'green-lighter', 'green', 'green-darker',
  'yellow-lighter', 'yellow', 'yellow-darker', 'red-lighter', 'red', 'red-darker', 'ink-lightest', 'ink-lighter', 'ink', 'ink-darker', 'gray-lightest', 'gray-lighter', 'gray', 'gray-darker', 'black-lighter', 'black']

Color.propTypes = {
  content: PropTypes.oneOf(colors),
  background: PropTypes.oneOf(colors)
}

export default Color
