import React from 'react'
import Sprite from '../../../shared/ui/Sprite/Sprite';

const Conscious = () => {
  return (  <div className="design-person__conscious">
          <div className="design-person__title">ЛИЧНОСТЬ</div>
          <div className="design-person__subtitle">Сознательное</div>
          <div className="design-person__column">
            <div className="design-person__item">
              <Sprite icon="up-yellow" width={8} height={9} />

              <p className="design-person__num-item">12.6</p>
              <div className="design-person__icon">
                <Sprite icon="planets-sun" width={20} height={20} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">11.6</p>
              <div className="design-person__icon">
                <Sprite icon="planets-earth" width={21} height={21} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">62.5</p>
              <div className="design-person__icon">
                <Sprite icon="planets-northnode" width={18} height={21} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">61.5</p>
              <div className="design-person__icon">
                <Sprite icon="planets-southnode" width={18} height={20} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">54.5</p>
              <div className="design-person__icon">
                <Sprite icon="planets-moon" width={15} height={20} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">53.5</p>
              <div className="design-person__icon">
                <Sprite icon="planets-mercury" width={15} height={24} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">15.2</p>
              <div className="design-person__icon">
                <Sprite icon="planets-venus" width={15} height={22} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">15.4</p>
              <div className="design-person__icon">
                <Sprite icon="planets-mars" width={20} height={21} />
              </div>
    
            </div>
            <div className="design-person__item">
              <Sprite icon="up-yellow" width={8} height={9} />
              <p className="design-person__num-item">8.4</p>
              <div className="design-person__icon">
                <Sprite icon="planets-jupiter" width={17} height={22} />
              </div>
    
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">8.1</p>
              <div className="design-person__icon">
                <Sprite icon="planets-saturn" width={14} height={23} />
              </div>
            </div>
    
            <div className="design-person__item">
              <p className="design-person__num-item">49.2</p>
              <div className="design-person__icon">
                <Sprite icon="planets-uranus" width={17} height={20} />
              </div>
            </div>
            <div className="design-person__item">
              <p className="design-person__num-item">41.5</p>
              <div className="design-person__icon">
                <Sprite icon="planets-neptune" width={22} height={22} />
              </div>
            </div>
            <div className="design-person__item">
              <Sprite icon="down-yellow" width={8} height={9} />
              <p className="design-person__num-item">9.6</p>
              <div className="design-person__icon">
                <Sprite icon="planets-pluto" width={12} height={18} />
              </div>
            </div>
          </div>
        </div>
      );
}


export default Conscious