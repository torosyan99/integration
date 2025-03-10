import React from 'react'
import { classNames } from '../../lib/classNames/classNames'

import './Button.css'

const Button = ({className , children, ...other}) => {
  return (
    <button className={classNames('button', [className])} {...other}> 
        {children}
    </button>
  )
}

export default Button