import React from "react";
import Number from "./Number";

const BottomLeft = () => {
  return (
    <>
      <Number size="big-size" className={"num-bottom-left-1"} type={"white"}>
        10
      </Number>
      <Number size="middle-size" className={"num-bottom-left-2"} type={"white"}>
        11
      </Number>{" "}
      <Number size="small-size" className={"num-bottom-left-3"} type={"white"}>
        19
      </Number>
    </>
  );
};

export default BottomLeft;
