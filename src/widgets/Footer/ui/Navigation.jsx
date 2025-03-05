import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='footer__nav'>
        <Link className='footer__link' to='#'>Главная</Link>
        <Link className='footer__link' to='#'>О нас</Link>
        <Link className='footer__link' to='#'>Матрица судьбы</Link>
        <Link className='footer__link' to='#'>Отзывы</Link>
        <Link className='footer__link' to='#'>Контакты</Link>
    </nav>
  )
}

export default Navigation