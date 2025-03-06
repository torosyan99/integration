import React from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'

const Box = ({src, style, className ,children}) => {
  return (
    <div className={classNames('design-person__box', [className])} style={style}>
        <img className='design-person__img' src={src} />
        {children}
    </div>
  )
}

export default Box