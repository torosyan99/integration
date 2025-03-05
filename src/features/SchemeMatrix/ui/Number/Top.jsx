import React from "react";
import Number from "./Number";


const Top = () => {
  return (
    <>
      <Number size="big-size" className={"num-top-1"} type={"purple"}>
        6
      </Number>
      <Number size="middle-size" className={"num-top-2"} type={"blue"}>
        21
      </Number>{" "}
      <Number size="small-size" className={"num-top-3"} type={"blue_2"}>
        15
      </Number>
      <Number size="small-size" className={"num-top-4"} type={"green"}>
        6
      </Number>
    </>
  );
};

export default Top;
