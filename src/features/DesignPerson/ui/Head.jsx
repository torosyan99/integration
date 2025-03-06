import React from "react";
import Box from "./Box";

import head_1 from "../assets/head_1.svg";
import head_2 from "../assets/head_2.svg";
import Number from "./Number";

const Head = () => {
  return (
    <>
      <Box className={"design-person__head-1"} src={head_1}>
        <Number
          style={{
            left: "19%",
            bottom: "8%",
          }}
        >
          64
        </Number>
        <Number
          style={{
            left: "50%",
            bottom: "2%",
            transform:'translateX(-50%)'
          }}
          background={true}
        >
          61
        </Number>

        <Number
          style={{
            right: "20%",
            bottom: "8%",
          }}
        >
          63
        </Number>
      </Box>
      <Box className={"design-person__head-2"} src={head_2}>
        <Number
          style={{
            left: "19%",
            top: "10%",
          }}
        >
          47
        </Number>
        <Number
          style={{
            left: "45%",
            top: "10%",
          }}
        >
          24
        </Number>

        <Number
          style={{
            right: "19%",
            top: "10%",
          }}
        >
          3
        </Number>


        <Number
          style={{
            left: "45%",
            bottom: "5%",
          }}
        >
          43
        </Number>

        <Number
          style={{
            left: "30%",
            bottom: "30%",
          }}
        >
          17
        </Number>

        <Number
          style={{
            right: "30%",
            bottom: "26%",
          }}

          background={true}
        >
          17
        </Number>
      </Box>
    </>
  );
};

export default Head;
