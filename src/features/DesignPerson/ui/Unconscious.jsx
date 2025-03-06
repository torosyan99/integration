import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Unconscious = () => {
  return (
    <div className="design-person__unconscious">
      <div className="design-person__title">ДИЗАЙН</div>
      <div className="design-person__subtitle">Бессознательное</div>
      <div className="design-person__column">
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-sun" width={20} height={20} />
          </div>
          <p className="design-person__num">25.2</p>
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-earth" width={21} height={21} />
          </div>
          <p className="design-person__num">46.2</p>
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-northnode" width={18} height={21} />
          </div>
          <p className="design-person__num">31.1</p>
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-southnode" width={18} height={20} />
          </div>
          <p className="design-person__num">41.1</p>
          <Sprite icon="up-pink" width={8} height={9} />
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-moon" width={15} height={20} />
          </div>
          <p className="design-person__num">46.3</p>
          <Sprite icon="up-pink" width={8} height={9} />
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-mercury" width={15} height={24} />
          </div>
          <p className="design-person__num">55.5</p>
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-venus" width={15} height={22} />
          </div>
          <p className="design-person__num">37.3</p>
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-mars" width={20} height={21} />
          </div>
          <p className="design-person__num">3.2</p>

          <Sprite icon="up-pink" width={8} height={9} />
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-jupiter" width={17} height={22} />
          </div>
          <p className="design-person__num">27.5</p>
          <Sprite icon="up-pink" width={8} height={9} />

        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-saturn" width={14} height={23} />
          </div>
          <p className="design-person__num">2.2</p>
          <Sprite icon="up-pink" width={8} height={9} />
        </div>

        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-uranus" width={17} height={20} />
          </div>
          <p className="design-person__num">49.1</p>
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-neptune" width={22} height={22} />
          </div>
          <p className="design-person__num">41.5</p>
          <Sprite icon="up-pink" width={8} height={9} />
        </div>
        <div className="design-person__item">
          <div className="design-person__icon">
            <Sprite icon="planets-pluto" width={12} height={18} />
          </div>
          <p className="design-person__num">5.2</p>
          <Sprite icon="star-pink" width={8} height={9} />
        </div>
      </div>
    </div>
  );
};

export default Unconscious;
