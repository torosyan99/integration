import React from "react";
import Number from "./Number";

const Bottom = () => {
  return (
    <>
      <Number
        size="big-size"
        className={"num-bottom-1"}
        type={"red"}
      >
        9
      </Number>
      <Number
        className={"num-bottom-2"}
        size="middle-size"
        type={"orange"}
      >
        9
      </Number>
      <Number
        className={"num-bottom-3"}
        size="small-size"
        type={"white"}
      >
        18
      </Number>
    </>
  );
};

export default Bottom;
