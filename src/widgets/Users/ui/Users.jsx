import React from "react";

import users_1 from "../assets/user_1.png";
import users_2 from "../assets/user_2.png";
import users_3 from "../assets/user_3.png";
import main_user from "../assets/main-user.png";
import add from "../assets/add.png";
import RandomIcon from "./RandomIcon";

import "./Users.css";
const config = ["", "", "", "","", "", "", "","", "", "", "","", "", "", "","", "", "", "","", "", "", ""];

const Users = () => {
  return (
    <section className="users">
      <div className="users__all">
        {config.map((_, index) => {
          if(index == 0) {
            return<button key={index} className="users__button active">
              <RandomIcon />
            </button>
          }

          return <button key={index} className="users__button">
          <RandomIcon />
        </button>
        })}
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
