import React from "react";
import Form from "./Form";
import { SchemeMatrix } from "../../../features/SchemeMatrix";
import { Buttons } from "../../../features/Buttons";

import "./MatrixOfFate.css";

const MatrixOfFate = () => {
  return (
    <section className="fate">
      <Form />
      {/* <Buttons /> */}
      <div className="fate__content">
        <div className="fate__wrapper">
          <h3 className="title fate__title">
            Что такое <span> матрица судьбы?</span>
          </h3>
          <p className="fate__text">
            "Матрица Судьбы" — инновационная онлайн-платформа, предлагающая
            уникальный подход к пониманию личной судьбы. Она позволяет
            пользователям расшифровать свои судьбоносные коды, обеспечивая
            глубокие инсайты в различные аспекты их жизни. С помощью
            интуитивного анализа и индивидуальной интерпретации, Матрица Судьбы
            помогает увидеть скрытые возможности, истинные цели и пути личного
            развития. Это мощное средство для тех, кто стремится к лучшему
            пониманию самого себя и своего жизненного пути, помогая преодолевать
            препятствия и достигать новых уровней успеха и удовлетворения.
          </p>
        </div>
        <div className="fate__scheme">
          <SchemeMatrix />
        </div>
      </div>
    </section>
  );
};

export default MatrixOfFate;
