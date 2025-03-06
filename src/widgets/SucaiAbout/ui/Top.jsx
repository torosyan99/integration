import React from "react";
import Point from "../../../shared/ui/Point/Point";
import Box from "../../../shared/ui/Box/Box";

const Top = () => {
  return (
    <div className="sucai-about__top">
      <Point num={1} value={"Число сознания"} />
      <div className="sucai-about__wrapper">
        <Box between={true} boxKey={"Число рождения"} value="1, 10, 19, 28" />
        <Box between={true} boxKey={"Планета"} value="солнце" />
        <Box between={true} boxKey={"Группа"} value="царь" />
      </div>
    </div>
  );
};
export default Top;
