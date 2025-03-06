import React from "react";

import "./Mission.css";
import Point from "../../../shared/ui/Point/Point";
import Box from "../../../shared/ui/Box/Box";

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission__top">
        <Point num={9} value={"Миссия"} />
        <div className="mission__wrapper">
          <Box
            className={"mission__box-first"}
            between={true}
            boxKey={"Миссия"}
            value={"служение обществу"}
          />
          <Box
            className={"mission__box-green"}
            between={true}
            greenBorder={true}
            boxKey={'Действия в "-":'}
            value={"служение обществу"}
          />

          <Box
            className={"mission__box-orange"}
            between={true}
            orangeBorder={true}
            boxKey={'Действия в "-":'}
            value={"пояс шахида"}
          />
        </div>
      </div>
      <p className="mission__text">
        Человек испытывает стремление эмоционально помогать кому-то.
        <div></div>
        Это самая ответственная, самая благородная и самая опасная миссия.
        <div></div>
        Человек с Числом Сознания 9 и Миссией 9 пришли служить обществу, но если
        не получают обратно - обижаются.
      </p>
    </section>
  );
};

export default Mission;
