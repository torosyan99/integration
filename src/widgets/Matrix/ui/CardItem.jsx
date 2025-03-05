import React from 'react'
import Sprite from '../../../shared/ui/Sprite/Sprite'

const CardItem = ({num,name, physics, energy, emotion}) => {
  return (
    <tr>
        <td>{num}</td>
        <td className='matrix__name'>{name}
            <Sprite width={17} height={17} icon='ask' />
        </td>
        <td>{physics}</td>
        <td>{energy}</td>
        <td>{emotion}</td>
    </tr>
  )
}

export default CardItem