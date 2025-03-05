import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const ThemeSwitcher = () => {
  return (
    <div className="header__theme">
      <button className="header__theme-button">
        <Sprite width={43} height={43} icon={"sun"} />
      </button>
      <button className="header__theme-button">
        <Sprite width={43} height={43} icon={"moon"} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
