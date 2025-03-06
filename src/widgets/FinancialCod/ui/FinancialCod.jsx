import React from "react";

import "./FinancialCod.css";
import Left from "./Left";
import Right from "./Right";

const FinancialCod = () => {
  return (
    <section className="financial-cod">
      <h3 className="title financial-cod__title">Финансовый код</h3>
      <div className="financial-cod__content">
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default FinancialCod;
