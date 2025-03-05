import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const QualityPoints = () => {
  return (
    <div className="decoding__box">
      <p className="decoding__quality-text">
        {" "}
        <span>Главная задача</span> по 19 энергии: найти свой талант,
        реализоваться в нем. Необходимо развивать в себе ораторское искусство,
        способность к публичным выступлениям.
      </p>
      <div className="decoding__points">
        <div className="decoding__points-item">
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text">
              {" "}
              ​​Позитивный взгляд на жизнь и открытость.
            </p>
          </div>
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text">
              {" "}
              ​Солнце, которое светит всем, согревая и обогащая.
            </p>
          </div>
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text"> Самоотдача.</p>
          </div>
        </div>
        <div className="decoding__points-item">
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text">
              {" "}
              Лидерство, целеустремленность и активная позиция в жизни.
            </p>
          </div>
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text">
              {" "}
              Реализация своего таланта и жизнь в достатке.
            </p>
          </div>
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text"> Многодетность.</p>
          </div>
        </div>
        <div className="decoding__points-item">
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text">
              {" "}
              Вокруг таких людей всегда много людей, друзей. Их любят в коллективе.
            </p>
          </div>
          <div className="decoding__point">
            <Sprite width={18} height={17} icon="star" />
            <p className="decoding__point-text">
              {" "}
              Воспринимают неудачу как очередную ступень к своей глобальной цели.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPoints;
