import React, { useState } from "react";
import { buttons } from "../config/buttons";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Info = () => {
  const [buttonsArray, setButtonsArray] = useState(buttons);
  const [topLeftBorder, setBorder] = useState(false);
  const active = buttonsArray.find(item => item.active)

  const handleClick = (index) => {
    if (index !== 0 && !topLeftBorder) {
      setBorder(true);
    } else if (index == 0 && topLeftBorder) {
      setBorder(false);
    }

    const newArray = buttonsArray.map((item, i) => {
      if (i === index) {
        item.active = true;
      } else item.active = false;
      return item;
    });

    setButtonsArray(newArray);
  };

  return (
    <div className="design__info">
      <div className="design__buttons">
        {buttonsArray.map(({ name, active }, index) => (
          <button
            key={name}
            className={classNames("design__button", [], { active })}
            onClick={() => handleClick(index)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className={classNames("design__box", [], { border: topLeftBorder })}>
        <div className="design__info-items">
          <div className="design__info-item">
            <p className="design__info-key">Тип личности</p>
            <p className="design__info-value">Генератор</p>
          </div>

          <div className="design__info-item">
            <p className="design__info-key">Профиль</p>
            <p className="design__info-value">
              <span>6 / </span> 2
            </p>
            <p className="design__info-value">
              <span>Ролевая модель / </span>
              Отшельник
            </p>
          </div>

          <div className="design__info-line"></div>

          <div className="design__info-item">
            <p className="design__info-key">Стратегия</p>
            <p className="design__info-value">Ждать возможности для отклика</p>
          </div>

          <div className="design__info-item">
            <p className="design__info-key">Авториет</p>
            <p className="design__info-value">Сакральный</p>
          </div>

          <div className="design__info-item">
            <p className="design__info-key">Ложное “Я”</p>
            <p className="design__info-value">Фрустрация</p>
          </div>

          <div className="design__info-item">
            <p className="design__info-key">Инкарнационный крест</p>
            <p className="design__info-value">
              Левоугольный Образования <br /> <span>(12/11 |</span> 25/46
              <span>)</span>
            </p>
          </div>
        </div>

        <h3 className="design__info-title title">Проектор 6/2</h3>
        <p className="design__info-text">{active.text}</p>
      </div>
    </div>
  );
};

export default Info;
