import React from 'react'

const BasicTop = ({name,num}) => {
  return (
    <div className='quality__basic-top'>
        <p className='quality__num'>{num}</p>
        <p className='quality__basic-name'>{name}</p>
    </div>
  )
}

export default BasicTop