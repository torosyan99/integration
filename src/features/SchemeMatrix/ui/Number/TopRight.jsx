import React from "react";
import Number from "./Number";

const TopRight = () => {
  return (
    <>
      <Number size="big-size" className={"num-top-right-1"} type={"purple"}>
        8
      </Number>
      <Number size="middle-size" className={"num-top-right-2"} type={"purple"}>
        7
      </Number>
      <Number size="small-size" className={"num-top-right-3"} type={"purple"}>
        17
      </Number>
    </>
  );
};

export default TopRight;
