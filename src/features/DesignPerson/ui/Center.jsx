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
          <Number>7</Number>
          <Number>13</Number>
        </Line>

        <Line left={"5%"} right={"5%"} top={"50%"} transform="translateY(-50%)">
          <Number>10</Number>
          <Number background={true}>25</Number>
        </Line>
        <Line left={"25%"} right={"25%"} bottom={"20%"}>
          <Number background={true}>15</Number>
          <Number background={true}>46</Number>
        </Line>

        <Line left={"50%"} transform="translateX(-50%)" bottom={"5%"}>
          <Number background={true}>2</Number>
        </Line>
      </Box>

      <Box src={center_2} className={"design-person__center-2"}>
        <Number absolute={true} top={"10%"} left="28%">
          51
        </Number>

        <Number absolute={true} top={"20%"} right="18%">
          21
        </Number>

        <Number
          absolute={true}
          top={"50%"}
          left="8%"
        >
          26
        </Number>
        <Number absolute={true} bottom={"10%"} right="20%">
          40
        </Number>
      </Box>
      <Box src={center_3} className={"design-person__center-3"}>
        <Line left={"50%"} transform="translateX(-50%)" top={"5%"}>
          <Number>14</Number>
        </Line>
        <Line left={"20%"} right={"20%"} top={"12%"}>
          <Number background={true}>5</Number>
          <Number>29</Number>
        </Line>

        <Line left={"9%"} right={"9%"} top={"27%"}>
          <Number>34</Number>
        </Line>

        <Line left={"9%"} right={"9%"} bottom={"27%"}>
          <Number background={true}>27</Number>
          <Number>59</Number>
        </Line>

        <Line left={"20%"} right={"20%"} bottom={"12%"}>
          <Number>42</Number>
          <Number background={true}>9</Number>
        </Line>

        <Number
          absolute={true}
          left={"50%"}
          transform="translateX(-50%)"
          bottom={"5%"}
          background={true}
        >
          3
        </Number>
      </Box>
      <Box src={center_4} className={"design-person__center-4"}>
        <Line top="6%" bottom="6%" right="5%" column={true}>
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="16%" bottom="16%" right="28%" column={true}>
          <Number>36</Number>
          <Number background={true}>30</Number>
        </Line>
        <Line top="26%" bottom="26%" right="50%" column={true}>
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
        <Line top="6%" bottom="6%" left="5%" column={true}>
          <Number>36</Number>
          <Number>30</Number>
        </Line>
        <Line top="16%" bottom="16%" left="28%" column={true}>
          <Number>37</Number>
          <Number background={true}>49</Number>
        </Line>
        <Line top="26%" bottom="26%" left="50%" column={true}>
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

        <Line top="24%" right="5%" left="5%">
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="46%" right="5%" left="5%">
          <Number>36</Number>
          <Number>30</Number>
        </Line>

        <Line top="72%" right="5%" left="5%">
          <Number>36</Number>
          <Number>30</Number>
        </Line>
      </Box>
    </>
  );
};

export default Center;
