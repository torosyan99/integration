import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Number = ({ children, absolute, background, end, ...other }) => {
  return (
    <div
      className={classNames("design-person__num", [], {
        background,
        end,
        absolute,
      })}
      style={{ ...other }}
    >
      {children}
    </div>
  );
};

export default Number;
