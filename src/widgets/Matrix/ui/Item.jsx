import React from "react";

const Item = ({ children, title, text }) => {
  return (
    <li className="matrix__item">
      <h5 className="matrix__item-title">{title}</h5>
      <p className="matrix__item-text">{text}</p>
      {children}
    </li>
  );
};

export default Item;
