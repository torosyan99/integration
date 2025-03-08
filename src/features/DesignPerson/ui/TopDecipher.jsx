import React from "react";

import circleIcon from "../assets/circle.svg";
import triangleIcon from "../assets/triangle.svg";
import pentagonIcon from "../assets/pentagon.svg";

const TopDecipher = ({ circle, pentagon, triangle, nameDisabled }) => {
  return (
    <div className="design-person__decipher">
      <div className="design-person__decipher-item">
        <div className="design-person__decipher-icon">
          <img src={circleIcon} alt="circle" />
          <span className="design-person__decipher-num">{circle}</span>
        </div>
        {!nameDisabled && (
          <span className="design-person__decipher-name">ЦВЕТ</span>
        )}
      </div>
      <div className="design-person__decipher-item">
        {" "}
        <div className="design-person__decipher-icon">
          <img src={triangleIcon} alt="triangle" />
          <span className="design-person__decipher-num">{triangle}</span>
        </div>
        {!nameDisabled && (
          <span className="design-person__decipher-name">ТОН</span>
        )}
      </div>
      <div className="design-person__decipher-item">
        {" "}
        <div className="design-person__decipher-icon">
          <img src={pentagonIcon} alt="pentagon" />
          <span className="design-person__decipher-num">{pentagon}</span>
        </div>
        {!nameDisabled && (
          <span className="design-person__decipher-name">БАЗА</span>
        )}
      </div>
    </div>
  );
};

export default TopDecipher;
