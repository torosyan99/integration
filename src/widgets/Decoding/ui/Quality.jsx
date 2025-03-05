import React, { useState } from "react";
import Switcher from "../../../shared/ui/Switcher/Switcher";
import QualityPoints from "./QualityPoints";

const Quality = () => {
  const [plus, setPlus] = useState(true);
  return (
    <div className="decoding__quality">
      <div className="decoding__wrapper">
        <div className="decoding__energy">
          <span className="decoding__energy-count">19</span>
          <span>
            Ваша <br /> энергия
          </span>
        </div>
        <Switcher
        className={'decoding__switcher'}
          first={"Плюсы"}
          second={"Минусы"}
          bool={plus}
          func={setPlus}
        />
        <p className="decoding__wrapper-text">
          Для полной расшифровки нужно <span>приобрести тариф</span>
        </p>
      </div>
      {plus ? <QualityPoints /> : <QualityPoints />}
    </div>
  );
};

export default Quality;
