import React from "react";
import Number from "./Number";

const BottomRight = () => {
  return (
    <>
      <Number size="big-size" className={"num-bottom-right-1"} type={"white"}>
        11
      </Number>
      <Number
        size="middle-size"
        className={"num-bottom-right-2"}
        type={"white"}
      >
        4
      </Number>
      <Number size="small-size" className={"num-bottom-right-3"} type={"white"}>
        20
      </Number>
      <Number
        className={"num-bottom-right-4"}
        type={"white_2"}
      >
        22
      </Number>
      <Number
        className={"num-bottom-right-5"}
        type={"white_2"}
      >
        11
      </Number>
    </>
  );
};

export default BottomRight;
