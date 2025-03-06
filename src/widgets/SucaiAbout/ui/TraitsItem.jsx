import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const TraitsItem = ({children, icon='star-red'}) => {
  return (
    <li className="sucai-about__traits-item">
      <Sprite icon={icon} width={25} height={24} />
      <span>{children}</span>
    </li>
  );
};


export default TraitsItem;
