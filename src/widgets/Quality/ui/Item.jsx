import React from "react";

const Item = ({ children, text }) => {
  return (
    <li className="quality__item">
      {children}
      <p className="quality__text">{text}</p>
    </li>
  );
};

export default Item;
