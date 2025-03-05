import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Socials = () => {
  return (
    <div className="footer__socials">
      <a className="footer__social" href="#">
        <Sprite width={16} height={16} icon="facebook" />
      </a>
      <a className="footer__social" href="#">
        <Sprite width={18} height={18} icon="instagram" />
      </a>
      <a className="footer__social" href="#">
        <Sprite width={16} height={13} icon="telegram" />
      </a>{" "}
      <a className="footer__social" href="#">
        <Sprite width={16} height={16} icon="whats-app" />
      </a>
      <a className="footer__social" href="#">
        <Sprite width={11} height={19} icon="ok" />
      </a>
      <a className="footer__social" href="#">
        <Sprite width={21} height={13} icon="vk" />
      </a>
    </div>
  );
};

export default Socials;
