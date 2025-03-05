import React from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { colors } from "../../config/colors";

import './Number.css'

const Number = ({ style, type, size, children, className }) => {
  const { color, background, border } = colors[type];

  const divStyle = {
    ...style,
    backgroundColor: background,
    color,
    border: border && "2px solid " + border,
  };

  return (
    <div
      className={classNames("num", [className, size])}
      style={divStyle}
    >
      {children}
    </div>
  );
};

export default Number;
