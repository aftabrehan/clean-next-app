import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ label, customClass }) => (
  <button className={clsx(stl.btn, customClass)}>{label}</button>
)

Button.defaultProps = {
  label: 'Button',
}

Button.propTypes = {
  label: PropTypes.string,
  customClass: PropTypes.string,
}

export default Button
