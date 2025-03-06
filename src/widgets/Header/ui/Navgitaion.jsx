import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    children: "Главная",
  },
  {
    path: "/d",
    children: "О нас",
  },
  {
    path: "/matrix-of-fate",
    children: "Матрица",
  },
  {
    path: "/z",
    children: "Отзывы",
  },
  {
    path: "/c",
    children: "Контакты",
  },
];

const Navigation = () => {
  

  return (

        <nav className="header__nav">
          {links.map(({ path, children }) => (
            <Link className="header__link" key={path} to={path}>
              {children}
            </Link>
          ))}
        </nav>
  );
};

export default Navigation;
