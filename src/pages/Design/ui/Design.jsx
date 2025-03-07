import React from "react";
import Info from "./Info";
import { Buttons } from "../../../features/Buttons";
import { DesignPerson } from "../../../features/DesignPerson";

import "./Design.css";

const Design = () => {
  return (
    <section className="design">
      <p className="design__text">
        Карта Дизайна Человека или Бодиграф - это точная схема
        психоэнергетических способностей и слабостей человека. В ней заложена
        подробная инструкция для вашей самореализации и освобождения ума от
        деструктивных мыслей и решений.
      </p>

      <Buttons />
      <div className="design__content">
        <Info />
        <DesignPerson className='design__person' />
      </div>
    </section>
  );
};

export default Design;
