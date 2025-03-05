import React from "react";

import { ReactComponent as Lines_1 } from "../assets/image-1.svg";
import Item from "./Item";

const List = () => {
  return (
    <ul className="matrix__list">
      <Item
        title={"Личное предназначение"}
        text={
          "Соединяя духовные и материальные задач личности мы получаем личное предназначение человека. (до 40 лет)"
        }
      >
        <div className="matrix__item-wrapper">
          <div className="matrix__item-box" style={{ left: "0" }}>
            Небо<p className="matrix__num">18</p>
          </div>
          <div className="matrix__item-box" style={{ left: "44%" }}>
            Земля<p className="matrix__num">18</p>
          </div>

          <p className="matrix__num matrix__num-absolute">9</p>
          <Lines_1 />
        </div>
      </Item>

      <Item
        title={"Социальное предназначение"}
        text={"То полезное, что мы даем во внешний мир. (после 40 лет)"}
      >
        <div className="matrix__item-wrapper">
          <div className="matrix__item-box" style={{ left: "0" }}>
            М<p className="matrix__num">18</p>
          </div>
          <div className="matrix__item-box" style={{ left: "46%" }}>
            Ж<p className="matrix__num">18</p>
          </div>

          <p className="matrix__num matrix__num-absolute">9</p>
          <Lines_1 />
        </div>
      </Item>

      <Item
        title={"Духовное предназначение"}
        text={"То полезное, что мы даем во внешний мир. (после 40 лет)"}
      >
        <div className="matrix__flex">
          <div className="matrix__num-direction">
            <span>9 +</span>
            <span>9</span>
          </div>
          <span>=</span>
          <div className="matrix__num">18</div>
        </div>
      </Item>
    </ul>
  );
};

export default List;
