import React from "react";

const Item = ({ top, children }) => {
  return (
    <li className="about__item">
     <h5 className="about__item-title">{top}</h5> 
      <p className="about__text">{children}</p>
    </li>
  );
};

export default Item;
