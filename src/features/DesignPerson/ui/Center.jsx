import React from "react";
import Box from "./Box";
import Line from "./Line";
import Number from "./Number";

import center_1 from "../assets/center_1.svg";
import center_2 from "../assets/center_2.svg";
import center_3 from "../assets/center_3.svg";
import center_4 from "../assets/center_4.svg";
import center_5 from "../assets/center_5.svg";
import center_6 from "../assets/center_6.svg";

const Center = () => {
  return (
    <>
      <Box src={center_1} className={"design-person__center-1"}>
        <Line left={"50%"} transform="translateX(-50%)" top={"5%"}>
          <Number>1</Number>
        </Line>

        <Line left={"25%"} right={"25%"} top={"20%"}>
          <Number>1</Number>
          <Number>5</Number>
        </Line>

        <Line left={"5%"} right={"5%"} top={"50%"} transform="translateY(-50%)">
          <Number>1</Number>
          <Number>5</Number>
        </Line>
        <Line left={"25%"} right={"25%"} bottom={"20%"}>
          <Number background={true}>1</Number>
          <Number background={true}>5</Number>
        </Line>

        <Line left={"50%"} transform="translateX(-50%)" bottom={"5%"}>
          <Number background={true}>1</Number>
        </Line>
      </Box>

      <Box src={center_2} className={"design-person__center-2"}>
        <Number absolute={true} top={"10%"} left="30%">
          51
        </Number>

        <Number absolute={true} top={"20%"} right="20%">
          51
        </Number>

        <Number
          absolute={true}
          top={"50%"}
          transform={"translateY(-50%)"}
          left="20%"
        >
          51
        </Number>
        <Number absolute={true} bottom={"10%"} right="20%">
          51
        </Number>
      </Box>
      <Box src={center_3} className={"design-person__center-3"}>
        <Line left={"50%"} transform="translateX(-50%)" top={"5%"}>
          <Number>1</Number>
        </Line>
        <Line left={"28%"} right={"28%"} top={"12%"}>
          <Number background={true}>1</Number>
          <Number>1</Number>
        </Line>

        <Line left={"15%"} right={"15%"} top={"30%"}>
          <Number>1</Number>
        </Line>

        <Line left={"15%"} right={"15%"} bottom={"30%"}>
          <Number background={true}>1</Number>
          <Number>1</Number>
        </Line>

        <Line left={"28%"} right={"32%"} bottom={"12%"}>
          <Number background={true}>1</Number>
          <Number>1</Number>
        </Line>

        <Number
          absolute={true}
          left={"50%"}
          transform="translateX(-50%)"
          bottom={"5%"}
        >
          1
        </Number>
      </Box>
      <Box src={center_4} className={"design-person__center-4"}>
        <Line top="5%" bottom="5%" right="5%" column={true}>
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="15%" bottom="15%" right="28%" column={true}>
          <Number>36</Number>
          <Number background={true}>30</Number>
        </Line>
        <Line top="25%" bottom="25%" right="50%" column={true}>
          <Number>37</Number>
          <Number background={true}>49</Number>
        </Line>

        <Number
          absolute={true}
          right={"70%"}
          top="50%"
          transform={"translateY(-50%)"}
        >
          37
        </Number>
      </Box>
      <Box src={center_5} className={"design-person__center-5"}>
        <Line top="5%" bottom="5%" left="5%" column={true}>
          <Number>36</Number>
          <Number>30</Number>
        </Line>
        <Line top="15%" bottom="15%" left="28%" column={true}>
          <Number>37</Number>
          <Number background={true}>49</Number>
        </Line>
        <Line top="25%" bottom="25%" left="50%" column={true}>
          <Number>37</Number>
          <Number background={true}>49</Number>
        </Line>

        <Number
          absolute={true}
          left={"70%"}
          top="50%"
          transform={"translateY(-50%)"}
        >
          37
        </Number>
      </Box>
      <Box src={center_6} className={"design-person__center-6"}>
        <Line top="5%" right="20%" left="20%">
          <Number background={true}>36</Number>
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="20%" right="5%" left="5%">
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="35%" right="5%" left="5%">
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="50%" right="5%" left="5%">
          <Number>36</Number>
          <Number>30</Number>
        </Line>
      </Box>
    </>
  );
};

export default Center;
