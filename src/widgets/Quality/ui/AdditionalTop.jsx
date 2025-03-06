import React from "react";

const AdditionalTop = ({name, subname, num}) => {
  return (
    <div className="quality__additional-top">
      <div className="quality__wrapper">
        <p className="quality__additional-name">{name}</p>
        <p className="quality__additional-subname">{subname}</p>
      </div>
      <p className="quality__num">{num}</p>
    </div>
  );
};

export default AdditionalTop;
