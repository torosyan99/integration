import React from 'react'
import { classNames } from '../../lib/classNames/classNames'

import './Button.css'

const Button = ({className , children}) => {
  return (
    <button className={classNames('button', [className])}>
        {children}
    </button>
  )
}

export default Button