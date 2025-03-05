import React from "react";
import CardItem from "./CardItem";

const Card = () => {
  return (
    <div className="matrix__card">
      <h4 className="matrix__card-title">Карта здоровья </h4>
      <table className="matrix__table">
        <thead className="matrix__thead">
          <tr>
            <th></th>
            <th>Название чакры</th>
            <th>Физика</th>
            <th>Энергия</th>
            <th>Эмоция</th>
          </tr>
          <CardItem num={7} name={'Сахасрара'} physics={19} energy={6} emotion={7}/>
          <CardItem num={6} name={'Аджна'} physics={11} energy={21} emotion={5}/>
          <CardItem num={5} name={'Вишудха'} physics={10} energy={15} emotion={7}/>
          <CardItem num={4} name={'Анахата'} physics={19} energy={6} emotion={7}/>
          <CardItem num={3} name={'Манипура'} physics={9} energy={9} emotion={18}/>
          <CardItem num={2} name={'Свадхистана'} physics={13} energy={9} emotion={22}/>
          <CardItem num={1} name={'Муладхара'} physics={2} energy={9} emotion={11}/>
          <tr>
            <td>Итого</td>
            <td></td>
            <td>19</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Card;
