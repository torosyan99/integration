import React from "react";
import { classNames } from "../../lib/classNames/classNames";

import "./Box.css";

const Box = ({
  boxKey,
  value,
  between,
  className,
  orangeBorder,
  greenBorder,
  children,
  gray
}) => {
  return (
    <div
      className={classNames("box", [className], {
        between,
        orange_border: orangeBorder,
        green_border: greenBorder,
        gray
      })}
    >
      {between && (
        <>
          <span className="box__key">{boxKey}</span>
          <span className="box__value">{value}</span>
        </>
      )}

      {children}
    </div>
  );
};

export default Box;
