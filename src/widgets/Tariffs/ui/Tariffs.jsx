import React from "react";

import "./Tariffs.css";
import List from "./List";

const Tariffs = () => {
  return (
    <section className="tariffs">
      <div className="container">
        <h3 className="title">
          путеводитель по <span>тарифам</span>{" "}
        </h3>
        <List />
      </div>
    </section>
  );
};

export default Tariffs;
