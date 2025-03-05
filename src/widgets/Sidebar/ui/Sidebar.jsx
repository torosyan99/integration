import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Sprite from "../../../shared/ui/Sprite/Sprite";

import "./Sidebar.css";

const links = [
  {
    icon: "sidebar-home",
    value: "Личный кабинет",
    path: "/",
  },
  {
    icon: "sidebar-transfer",
    path: "/matrix-of-fate",
    value: "Матрица судьбы",
  },
  {
    icon: "sidebar-transfer",
    path: "/",
    value: "Дизайн человека",
  },
  {
    icon: "sidebar-user",
    path: "/",
    value: "Квадрат Пифагора",
  },
  {
    icon: "sidebar-investment",
    path: "/",
    value: "Сюцай",
  },
  {
    icon: "sidebar-card",
    path: "/",
    value: "Тарифы",
  },
  {
    icon: "sidebar-setting",
    path: "/",
    value: "Настройки",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Интеграция</h2>
      <nav className="sidebar__links">
        {links.map(({ icon, path, value }) => (
          <NavLink
            className={classNames("sidebar__link")}
            key={value}
            to={path}
          >
            <Sprite icon={icon} width={25} height={25} />
            {value}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
