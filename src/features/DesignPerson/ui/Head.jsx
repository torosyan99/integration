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
        <Line left={"20%"} right={"20%"} top={"5%"}>
          <Number>47</Number>
          <Number>24</Number>
          <Number>4</Number>
        </Line>

        <Line left={"28%"} right={"28%"} bottom={"34%"}>
          <Number>17</Number>
          <Number background={true}>11</Number>
        </Line>

        <Line left={"50%"} bottom={"4%"} transform="translateX(-50%)">
          <Number>43</Number>
        </Line>
      </Box>
      <Box className={"design-person__head-3"} src={head_3}>
        <Line left={"24%"} right={"24%"} top={"5%"}>
          <Number background={true}>62</Number>
          <Number>23</Number>
          <Number>56</Number>
        </Line>

        <Line left={"15%"} right={"15%"} top={"23%"}>
          <Number>16</Number>
          <Number>35</Number>
        </Line>

        <Line
          left={"10%"}
          right={"10%"}
          top={"50%"}
          transform={"translateY(-50%)"}
        >
          <Number>20</Number>
          <Number background={true}>12</Number>
        </Line>

        <Line left={"15%"} right={"15%"} bottom={"23%"}>
          <Number end={true}>45</Number>
        </Line>

        <Line left={"24%"} right={"24%"} bottom={"5%"}>
          <Number background={true}>31</Number>
          <Number background={true}>8</Number>
          <Number>33</Number>
        </Line>
      </Box>
    </>
  );
};

export default Head;
