import React from "react";

import users_1 from "../assets/user_1.png";
import users_2 from "../assets/user_2.png";
import users_3 from "../assets/user_3.png";
import main_user from "../assets/main-user.png";
import add from "../assets/add.png";

import "./Users.css";

const Users = () => {
  return (
    <section className="users">
      <div className="users__all">
        <button className="users__button">
          <img className="users__photo" src={users_1} />
        </button>
        <button className="users__button">
          <img className="users__photo" src={users_2} />
        </button>
        <button className="users__button">
          <img className="users__photo" src={users_2} />
        </button>
        <button className="users__button">
          <img className="users__photo" src={users_3} />
        </button>
        <button className="users__button">
          <img className="users__photo" src={users_2} />
        </button>
        <button className="users__button">
          <img className="users__photo" src={add} />
        </button>
      </div>
      <button className="users__main">
        <img className="users__photo" src={main_user} />
      </button>
    </section>
  );
};

export default Users;
