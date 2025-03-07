import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Line = ({ children,column, ...other }) => {
  return (
    <div
      className={classNames("design-person__line",[], {column})}
      style={{...other}}
    >
      {children}
    </div>
  );
};

export default Line;
