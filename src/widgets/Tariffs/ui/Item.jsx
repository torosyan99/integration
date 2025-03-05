import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import Button from "../../../shared/ui/Button/Button";

const Item = ({ title, price, people, points = [] }) => {
  return (
    <li className="tariffs__item">
      <h5 className="tariffs__item-title">{title}</h5>
      <div className="tariffs__item-flex">
        <div className="tariffs__price">
          <span>{price} </span> в месяц
        </div>
        <div className="tariffs__people">
          <span> {people}</span>
          человек купили
        </div>
      </div>
      <div className="tariffs__points">
        {points.map((text) => (
          <div className="tariffs__point" key={text}>
            <Sprite fill='none' icon="check" width={22} height={22} />
            <p className="tariffs__text">{text}</p>
          </div>
        ))}
      </div>

      <Button className={'tariffs__button'}>Выбрать</Button>
    </li>
  );
};

export default Item;
