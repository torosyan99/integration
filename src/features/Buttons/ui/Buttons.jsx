import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

import "./Buttons.css";

const Buttons = ({ buttons, setButtons }) => {
  const handleClick = (index) => {
    const newButtons = buttons.map((item, i) => {
      if (index == i) {
        item.active = true;
      } else {
        item.active = false;
      }

      return item;
    });

    setButtons(newButtons)
  };
  return (
    <div className="buttons">
      {buttons.map((item, index) => (
        <button
          className={classNames("buttons__item", [], { active: item.active })}
          key={item.name}
          onClick={() => handleClick(index)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
