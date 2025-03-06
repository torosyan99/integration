import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Number = ({ children, style, background }) => {
  return (
    <div
      className={classNames("design-person__num-p", [], { background })}
      style={style}
    >
      {children}
    </div>
  );
};

export default Number;
