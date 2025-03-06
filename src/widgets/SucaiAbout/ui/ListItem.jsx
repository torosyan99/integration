import React from 'react'
import Sprite from '../../../shared/ui/Sprite/Sprite'

const ListItem = ({children, icon='star-red'}) => {
  return (
    <li className='sucai-about__item'>
        <Sprite icon={icon}  width={17} height={16} />
        <span>{children}</span>
    </li>
  )
}

export default ListItem