import React from 'react'

import './Point.css'

const Point = ({num,value}) => {
  return (
    <div className='point'>
        <span className="point__num">{num}</span>
        <p className='point__value'>{value}</p>
    </div>
  )
}

export default Point