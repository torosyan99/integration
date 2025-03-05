import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

const ItemLeft = ({ image, title, text, children, className }) => {
  return (
    <div className={classNames('questions__item', [className])}>
      <div className="questions__wrapper">
        <h4 className="questions__item-title">{title}</h4>
        <p className="questions__text">{text}</p>
        {children}
      </div>
      <div className="questions__image-wrapper">
        <img className={'questions__image'} src={image} alt="image" />
      </div>
    </div>
  );
};

export default ItemLeft;
