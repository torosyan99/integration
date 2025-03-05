import React from "react";
import { getFirstLetters } from "../../../shared/lib/getFirstLetters/getFirstLetters";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Item = ({ name, date, children }) => {
  return (
    <div className="reviews__item">
      <div className="reviews__user">
        <div className="reviews__user-picture">{getFirstLetters(name)}</div>
        <div className="reviews__wrapper">
          <span className="reviews__name">{name}</span>
          <span className="reviews__date">{date}</span>
        </div>
      </div>
      <p className="reviews__text">{children}</p>

      <a className="reviews__link" href="#">
        Рассчитать
        <Sprite width={18} height={14} icon="arrow-right"  />
      </a>
    </div>
  );
};

export default Item;
