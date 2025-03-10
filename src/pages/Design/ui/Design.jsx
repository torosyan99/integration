import React, { useState } from "react";
import Info from "./Info";
import { Buttons } from "../../../features/Buttons";
import { DesignPerson } from "../../../features/DesignPerson";
import { buttonsTop } from "../config/buttons";

import "./Design.css";

const Design = () => {
  const [buttons,setButtons] = useState(buttonsTop)
  const activeButton = buttons.find(item => item.active)
  
  return (
    <section className="design">
      <p className="design__text">
        {activeButton.text}
      </p>

      <Buttons buttons={buttons} setButtons={setButtons} />
      <div className="design__content">
        <Info />
        <DesignPerson className='design__person' />
      </div>
    </section>
  );
};

export default Design;
