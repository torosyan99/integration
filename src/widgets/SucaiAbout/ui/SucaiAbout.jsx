import React from "react";
import Top from "./Top";
import Description from "./Description";
import PositiveTraits from "./PositiveTraits";
import NegativeTraits from "./NegativeTraits";

import "./SucaiAbout.css";

const SucaiAbout = () => {
  return (
    <section className="sucai-about">
      <p className="sucai-about__text">
        Сюцай — наука о психологии, цель которой является дисциплинировать ум и
        реализовать душу. Основана профессором психологии Жанатом Кожамжаровым.
        По дате рождения человека можно узнать судьбу, основанную на трех
        аспектах: число сознания, миссия и матрица.
      </p>
      <Top />
      <Description />

      <div className="sucai-about__bottom">
        <PositiveTraits />
        <NegativeTraits />
      </div>
    </section>
  );
};

export default SucaiAbout;
