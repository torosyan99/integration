import React from "react";
import Button from "../../../shared/ui/Button/Button";
import Date from "./Date";


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
              <Date />
              <div className="top__button-wrapper">
                <Button className={"top__button"}>Разгадать судьбу</Button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Top;
