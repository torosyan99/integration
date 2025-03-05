import React from "react";

import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <button className="buttons__item active">Рейв -карта</button>
      <button className="buttons__item">Механика</button>
      <button className="buttons__item">Переменные и PHS</button>
      <button className="buttons__item">Ворота и линии</button>
      <button className="buttons__item">Травмы</button>
      <button className="buttons__item">Хологенетика</button>
      <button className="buttons__item">Значимые даты</button>
      <button className="buttons__item">Транзит</button>
    </div>
  );
};

export default Buttons;
