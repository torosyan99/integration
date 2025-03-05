import React from "react";
import Number from "./Number";

const CenterLeft = () => {
  return (
    <>
      <Number className="num-center-left" size="big-size" type="purple">
        19
      </Number>
      <Number className="num-center-left-2" size="middle-size" type="blue">
        11
      </Number>
      <Number className="num-center-left-3" size="small-size" type="blue_2">
        10
      </Number>
      <Number className="num-center-left-4" size="small-size" type="green">
        19
      </Number>
    </>
  );
};

export default CenterLeft;
