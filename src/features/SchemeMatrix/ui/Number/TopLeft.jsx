import React from "react";
import Number from "./Number";

const TopLeft = () => {
  return (
    <>
      <Number size="big-size" className={"num-top-left-1"} type={"purple"}>
        7
      </Number>
      <Number size="middle-size" className={"num-top-left-2"} type={"purple"}>
        5
      </Number>{" "}
      <Number size="small-size" className={"num-top-left-3"} type={"purple"}>
        16
      </Number>
      <Number size="small-size" className={"num-top-left-4"} type={"white_2"}>
        7
      </Number>
    </>
  );
};

export default TopLeft;
