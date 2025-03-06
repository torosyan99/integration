import React from 'react'
import Item from './Item'

const List = () => {
  return (
    <ul className='psychomatrix__list'>
        <Item name='Самооценка' subname={'столбец “1-2-3”'}  num={4}/>
        <Item name='Зарабатывание денег' subname={'столбец “4-5-6”'}  num={2}/>
        <Item name='Потенциал таланта' subname={'столбец “7-8-9”'}  num={4}/>
        <Item name='Целеустремленность' subname={'строка “1-4-7”'}  num={4}/>
        <Item name='Семейность' subname={'строка “2-5-8”'}  num={2}/>
        <Item name='Стабильность' subname={'строка “3-6-9”'}  num={4}/>
        <Item name='Духовный потенциал' subname={'диагональ “1-5-9”'}  num={5}/>
        <Item name='Темперамент' subname={'диагональ “3-5-7”'}  num={1}/>
    </ul>
  )
}

export default List