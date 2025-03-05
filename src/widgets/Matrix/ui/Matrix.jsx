import React from "react";
import Form from "./Form";
import Card from "./Card";
import List from "./List";
import { SchemeMatrix } from "../../../features/SchemeMatrix";

import "./Matrix.css";

const Matrix = () => {
  return (
    <section className="matrix">
      <div className="container">
        <div className="matrix__content">
          <div className="matrix__wrapper">
            <h3 className="title">
              Ваша <span> матрица судьбы</span>
            </h3>
            <Form />
            <Card />
          </div>
          <div className="matrix__scheme">
            <SchemeMatrix  />
          </div>
        </div>
        <List />
      </div>
    </section>
  );
};

export default Matrix;
