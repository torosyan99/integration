import React from "react";
import Button from "../../../shared/ui/Button/Button";

import darkPhoto from "../assets/dark-photo.png";

import "./Top.css";

const Top = () => {
  return (
    <section className="top">
        <div className="container top__inner">
          <div className="top__content">
            <h1 className="top__title">
              раскрой свой <span>лабиринты души</span>{" "}
            </h1>
            <p className="top__text">
              Отправьтесь в увлекательное путешествие самопознания: погружение в
              глубины человеческой психики через уникальные исследования и
              мудрое руководство по раскрытию своего потенциала
            </p>
            <div className="top__wrapper">
              <div className="top__date">01.02.2003</div>
              <div className="top__button-wrapper">
                <Button className={"top__button"}>Разгадать судьбу</Button>
              </div>
            </div>
          </div>
          <img className="top__background" src={darkPhoto} alt="background" />
      </div>
    </section>
  );
};

export default Top;
