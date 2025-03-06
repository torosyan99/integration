import React from "react";
import Box from "../../../shared/ui/Box/Box";
import TraitsItem from "./TraitsItem";

const NegativeTraits = () => {
  return (
    <Box gray={true} className={"sucai-about__traits"}>
      <h5 className="sucai-about__traits-title">Отрицательные черты</h5>
      <p className="sucai-about__traits-subtitle orange">
        агрессия, деспотизм, консерватизм, эгоизм
      </p>

      <ul className="sucai-about__traits-list">
        <TraitsItem>
          1 пришла для страданий. Она хочет всегда, чтобы другие делали так, как
          она хочет.
        </TraitsItem>
        <TraitsItem>
          1 - это самодур, принимает решение от Балды. Стоит на 1-ой ноге и
          катится только вперёд.
        </TraitsItem>
        <TraitsItem>
          Из-за того, что 1 принимает решение одна - Вселенная её не
          поддерживает. За 1 идти опасно, т.к. у неё иллюзорные и призрачные
          знания.
        </TraitsItem>
        <TraitsItem>
          Изменятся все, кроме 1. Обязательно нужен кризис, чтобы она осознала
          это.
        </TraitsItem>
        <TraitsItem>
          1 делит людей на своих и чужих. Любовь у 1 длится 1 минуту. Если по
          мнению 1 вы предали её, то 1 отрезает этого человека.
        </TraitsItem>
        <TraitsItem>
          Существует склонность к авантюризму и алкоголизму
        </TraitsItem>
        <TraitsItem>
          1 сжигает окружение своим присутствием. У них нет адекватной
          коммуникации.
        </TraitsItem>
        <TraitsItem>1 страдает гигантоманией.</TraitsItem>
      </ul>
    </Box>
  );
};

export default NegativeTraits;
