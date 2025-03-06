import React from 'react'
import { Table } from '../../../features/Table'
import { tableArray } from '../config/tableArray'
import List from './List'

import './Psychomatrix.css'

const Psychomatrix = () => {
  return (
    <section className='psychomatrix'>
        <p className="psychomatrix__text">Так называемая «психоматрица», придуманная древнегреческим ученым Пифагором, относится к самым популярным расчетам в нумерологии. Она помогает определить: силу характера, энергетику, здоровье, интеллект и другие врожденные качества. Кроме того, вы увидите примеры известных людей, обладающих такими же качествами, которые есть у вас.</p>
        <div className="psychomatrix__content">
            <Table tableArray={tableArray} />
            <List />
        </div>
    </section>
  )
}

export default Psychomatrix