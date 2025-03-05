import React from "react";
import Center from "./Center";
import Bottom from "./Bottom";
import BottomRight from "./BottomRight";
import BottomLeft from "./BottomLeft";
import CenterLeft from "./CenterLeft";
import CenterRight from "./CenterRight";
import Top from "./Top";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

const Numbers = () => {
  return (
    <>
      <Top />
      <TopRight />
      <TopLeft />

      <Center />
      <CenterRight />
      <CenterLeft />

      <Bottom />
      <BottomRight />
      <BottomLeft />
    </>
  );
};

export default Numbers;
