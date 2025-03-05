import React from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'

const ItemRight = ({image,title,text , children, className}) => {
  return (
    <div className={classNames('questions__item', [className])}>
        <img className='questions__image' src={image}  alt='image'/>
        <div className='questions__wrapper'>
            <h4 className='questions__item-title'>{title}</h4>
            <p className='questions__text'>{text}</p>
            {children}
        </div>
    </div>
  )
}

export default ItemRight