import React from "react";
import Number from "./Number";

const Center = () => {
  return (
    <>
      <Number
        className="num-center"
        size="big-size"
        type="yellow"
      >
        9
      </Number>
      <Number
        className="num-center-2"
        size={"middle-size"}
        type={"purple"}
      >
        9
      </Number>
    </>
  );
};

export default Center;
