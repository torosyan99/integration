import React from 'react'
import Box from '../../../shared/ui/Box/Box'
import ListItem from './ListItem'

const Description = () => {
  return (
        <div className="sucai-about__description">
          <p className="sucai-about__description-text">
            1 рождены в аспекте "ЭГО" и являются эгоистами ("Я и всё"). У таких
            людей нет вектора ЭГО. Сознание направлено на себя, на принятие
            решения, стремиться к индивидуальности.
            <div></div>
            Душа реализуется через руководство, лидерство или автономный труд.
            Хочет иметь индивидуальную территорию, т.е. никому не подчиняться.
            <div></div>
            Человек – часто успешный начальник, глава коллектива, предприниматель.
          </p>
          <Box className={"sucai-about__box"} orangeBorder={true}>
            <h5 className="sucai-about__box-title">Причины разрушения</h5>
            <ul className="sucai-about__list">
              <ListItem>не смогла приобрести индивидуальность</ListItem>
              <ListItem>от того, что идеализирует ситуации или общество</ListItem>
              <ListItem>от собственного консерватизма</ListItem>
            </ul>
          </Box>
          <Box className={"sucai-about__box"} greenBorder={true}>
            <h5 className="sucai-about__box-title">Наслаждается</h5>
            <ul className="sucai-about__list">
              <ListItem icon="star-green">
                от собственной реализации, реализации своего ЭГО
              </ListItem>
              <ListItem icon="star-green">сам себе семья</ListItem>
              <ListItem icon="star-green">от индивидуальности</ListItem>
            </ul>
          </Box>
        </div>
  )
}

export default Description