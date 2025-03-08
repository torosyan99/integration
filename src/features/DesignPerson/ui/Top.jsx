import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

import TopDecipher from "./TopDecipher";

const Top = () => {
  return (
    <div className="design-person__top">
      <div className="design-person__top-item">
        <div className="design-person__top-wrapper">
          <span className="design-person__top-pink">R</span>
          <Sprite icon="arrow-right-pink" width="38.54px" height="16.8px" />
        </div>
        <TopDecipher circle={5} triangle={4} pentagon={3} />
      </div>
      <div className="design-person__top-item">
        <div className="design-person__top-wrapper end">
          <Sprite icon="arrow-right-yellow" width="38.54px" height="16.8px" />
          <span className="design-person__top-yellow">R</span>
        </div>
        <TopDecipher circle={4} triangle={5} pentagon={4} />
      </div>
      <div className="design-person__top-item">
        <div className="design-person__top-wrapper">
          <span className="design-person__top-pink">R</span>
          <Sprite icon="arrow-right-pink" width="38.54px" height="16.8px" />
        </div>
        <TopDecipher circle={1} triangle={6} pentagon={2} nameDisabled={true} />
      </div>
      <div className="design-person__top-item">
        <div className="design-person__top-wrapper end">
          <Sprite icon="arrow-left-yellow" width="38.54px" height="16.8px" />
          <span className="design-person__top-yellow">L</span>
        </div>
        <TopDecipher circle={2} triangle={1} pentagon={5} nameDisabled={true} />
      </div>
    </div>
  );
};

export default Top;
