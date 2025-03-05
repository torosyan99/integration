import React from "react";

const Form = () => {
  return (
    <form className="fate__form">
      <input className='fate__form-name' placeholder='Имя'/>
        <button className='fate__birthday'>19.06.2000</button>
        <button className='fate__form-button'>Рассчитать</button>
    </form>
  );
};

export default Form;
