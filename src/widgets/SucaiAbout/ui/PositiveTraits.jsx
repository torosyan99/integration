import React from "react";
import Box from "../../../shared/ui/Box/Box";
import TraitsItem from "./TraitsItem";

const PositiveTraits = () => {
  return (
    <Box gray={true} className={"sucai-about__traits"}>
      <h5 className="sucai-about__traits-title">Положительные черты</h5>
      <p className="sucai-about__traits-subtitle green">
        инициативность, лидерство, покровительство, идеализм
      </p>

      <ul className="sucai-about__traits-list">
        <TraitsItem icon="star-green">
          1 - это лидер, который хочет власти. Это локомотив. Все остальные
          цифры - это вагоны. Нет 1, поезд не поедет.
        </TraitsItem>
        <TraitsItem icon="star-green">1 должна быть первой.</TraitsItem>
        <TraitsItem icon="star-green">
          1 - это идеалист, который говорит, что всё будет хорошо. Это стратег,
          мотиватор.
        </TraitsItem>
        <TraitsItem icon="star-green">
          1 обладает стратегическим мышлением и является лучшими финансистами.
        </TraitsItem>
        <TraitsItem icon="star-green">
          1 обладает психической энергией и является "шаманом". Это люди,
          которые смогут лечить энергией. Являются целителями.
        </TraitsItem>
        <TraitsItem icon="star-green">
          Только тогда, когда 1 уходит от своих страданий, у неё включается
          "тонкий интеллект" и память.
        </TraitsItem>
        <TraitsItem icon="star-green">
          1 вечно молода, требующая постоянного ухода.
        </TraitsItem>
        <TraitsItem icon="star-green">
          1 - это открытый, правдивый, прямолинейный, прямой, что на уме, то и
          на языке, называет все вещи своими именами, душа нараспашку.
        </TraitsItem>
      </ul>
    </Box>
  );
};

export default PositiveTraits;
