import React from 'react'
import { classNames } from '../../lib/classNames/classNames'

import './InactiveButton.css'

const InactiveButton = ({className , children}) => {
  return (
    <button className={classNames('inactive-button', [className])}>
        {children}
    </button>
  )
}

export default InactiveButton