import React from 'react'
import PropTypes from 'prop-types';

function Button({children}) {
  return (
    <button className='text-[16px] py-1 px-16 bg-sky-200 font-semibold text-[var(--primary-color)] px-4 rounded-xl cursor-pointer'>{children}</button>
  )
}

export default Button;

Button.propTypes = {
  children: PropTypes.string
};