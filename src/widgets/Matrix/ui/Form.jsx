import React from 'react'

const Form = () => {
  return (
    <form className='matrix__form'>
        <input className='matrix__form-name' placeholder='Имя'/>
        <button className='matrix__birthday'>Рождение: <span>19.06.2000</span></button>
        <button className='matrix__form-button'>Рассчитать</button>
    </form>
  )
}

export default Form