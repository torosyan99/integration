import React from "react";
import Box from "./Box";
import Number from "./Number";
import Line from "./Line";

import head_1 from "../assets/head_1.svg";
import head_2 from "../assets/head_2.svg";
import head_3 from "../assets/head_3.svg";

const Head = () => {
  return (
    <>
      <Box className={"design-person__head-1"} src={head_1}>
        <Line left={"15%"} right={"15%"} bottom={"5%"}>
          <Number>64</Number>
          <Number background={true}>61</Number>
          <Number>63</Number>
        </Line>
      </Box>
      <Box className={"design-person__head-2"} src={head_2}>
        <Line left={"20%"} right={"20%"} top={"12%"}>
          <Number>47</Number>
          <Number>24</Number>
          <Number>3</Number>
        </Line>

        <Line left={"30%"} right={"30%"} bottom={"30%"}>
          <Number>43</Number>
          <Number>17</Number>
        </Line>

        <Line left={"50%"} bottom={"5%"} transform="translateX(-50%)">
          <Number background={true}>17</Number>
        </Line>
      </Box>
      <Box className={"design-person__head-3"} src={head_3}>
        <Line left={"24%"} right={"24%"} top={"5%"}>
          <Number>64</Number>
          <Number background={true}>61</Number>
          <Number>63</Number>
        </Line>

        <Line left={"15%"} right={"15%"} top={"25%"}>
          <Number>64</Number>
          <Number>63</Number>
        </Line>

        <Line
          left={"10%"}
          right={"10%"}
          top={"50%"}
          transform={"translateY(-50%)"}
        >
          <Number>64</Number>
          <Number>63</Number>
        </Line>

        <Line left={"15%"} right={"15%"} bottom={"25%"}>
          <Number end={true}>63</Number>
        </Line>

        <Line left={"24%"} right={"24%"} bottom={"5%"}>
          <Number background={true}>64</Number>
          <Number background={true}>61</Number>
          <Number>63</Number>
        </Line>
      </Box>
    </>
  );
};

export default Head;
