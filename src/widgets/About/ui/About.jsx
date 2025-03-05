import React from "react";

import "./About.css";
import Item from "./Item";

const items = [
  {
    top: "15 562",
    text: <>человек <br /> расшифровали свою <br />судьбу</>,
  },
  {
    top: "36 237",
    text: <>человек улучшили свою <br /> жизнь после <br /> расшифровки</>,
  },
  {
    top: "95,92%",
    text: <>повысили  <br /> удовлетворенности жизнью после использования Матрицы судьбы</>,
  },
  {
    top: "7 лет",
    text: <>помогаем людям <br /> понять свое <br /> предназначение</>,
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <ul className="about__list">
          {items.map(({top, text}) =><Item key={top} top={top}>{text}</Item>)}
        </ul>
      </div>
    </section>
  );
};

export default About;
