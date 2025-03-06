import React from "react";

const Item = ({ name, subname, num }) => {
  return (
    <li className="psychomatrix__item">
      <div className="psychomatrix__wrapper">
        <p className="psychomatrix__item-name">{name}</p>
        <p className="psychomatrix__item-subname">{subname}</p>
      </div>
      <p className="psychomatrix__item-num">{num}</p>
    </li>
  );
};

export default Item;
