import React from "react";

const Info = () => {
  return (
    <div className="design__info">
      <div className="design__buttons">
        <button className="design__button active">Рейв-карта</button>
        <button className="design__button">Личность</button>
        <button className="design__button">Дизайн</button>
        <button className="design__button">Ложное “Я”</button>
      </div>

      <div className="design__box">
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
        <p className="design__info-text">
          "Матрица Судьбы" — инновационная онлайн-платформа, предлагающая
          уникальный подход к пониманию личной судьбы. Она позволяет
          пользователям расшифровать{" "}
        </p>
      </div>
    </div>
  );
};

export default Info;
