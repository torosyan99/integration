import React from "react";
import Point from "../../../shared/ui/Point/Point";
import Box from "../../../shared/ui/Box/Box";

const Left = () => {
  return (
    <div className="financial-cod__left">
      <Point num={1629} value={"Ваш финансовый код"} />
      <Box className={"financial-cod__box"} gray={true}>
        <h5 className="financial-cod__box-title">Расчет финансового кода:</h5>
        <ul className="financial-cod__list">
            <li className="financial-cod__item between">
                <span className="financial-cod__key">1. Число рождения</span>
                <span className="financial-cod__value">19 = 1 + 9 = 10 = 1 + 0 = 1</span>
            </li>
            <li className="financial-cod__item between">
                <span className="financial-cod__key">2. Месяц рождения</span>
                <span className="financial-cod__value">06 = 0 + 6 = 6</span>
            </li>
            <li className="financial-cod__item between">
                <span className="financial-cod__key">3. Год рождения</span>
                <span className="financial-cod__value">2000 = 2 + 0 + 0 + 0 = 2</span>
            </li>
            <li className="financial-cod__item between">
                <span className="financial-cod__key">4. Сумма</span>
                <span className="financial-cod__value">1 + 6 + 2 = 9</span>
            </li>
            <li className="financial-cod__item between">
                <span className="financial-cod__key">5. Финансовый код</span>
                <span className="financial-cod__value">1629</span>
            </li>
        </ul>
      </Box>
    </div>
  );
};

export default Left;
