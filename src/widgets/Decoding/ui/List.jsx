import React from "react";
import Button from "../../../shared/ui/Button/Button";
import InactiveButton from "../../../shared/ui/InactiveButton/IntactiveButton";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import ListButton from "./ListButton";

const List = () => {
  return (
    <div className="decoding__list">
      <ListButton active={true}>Визитная карточка</ListButton>
      <ListButton>
        Карма прошлого <br /> воплощения
      </ListButton>
      <ListButton block={true}>Главная проработка души</ListButton>
      <ListButton block={true}>Задача души до 40 лет</ListButton>
      <ListButton>Отношения</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton block={true}>Точка душевного комфорта</ListButton>
      <ListButton>Родовые значения</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
      <ListButton>Деньги</ListButton>
    </div>
  );
};

export default List;
