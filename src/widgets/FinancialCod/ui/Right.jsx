import React from "react";
import Box from "../../../shared/ui/Box/Box";

const Right = () => {
  return (
    <div className="financial-cod__right">
      <Box className={"financial-cod__box"} gray={true}>
        <h5 className="financial-cod__box-title">
          Как использовать свой финансовый код:
        </h5>
        <ul className="financial-cod__list">
          <li className="financial-cod__item">в паролях, пин-кодах;</li>
          <li className="financial-cod__item">
            как часть ник-нейма, логина, названия электронной почты;
          </li>
          <li className="financial-cod__item">
            зарегистрируйте номер телефона, в котором будет присутствовать
            денежный код;
          </li>
          <li className="financial-cod__item">
            повторяйте свой финансовый код вслух или про себя;
          </li>
          <li className="financial-cod__item">
            запишите его на бумаге и держите всегда при себе в кошельке или в
            качестве тилисмана;
          </li>
          <li className="financial-cod__item">
            нарисуйте код на карте желаний.
          </li>
        </ul>
      </Box>
    </div>
  );
};

export default Right;
