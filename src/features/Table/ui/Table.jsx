import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

import "./Table.css";

const Table = ({ className, tableArray = [] }) => {
  return (
    <table className={classNames("table", [className])}>
      {tableArray.map((innerArray, index) => (
        <tr key={index}>
          {innerArray.map(({ name, num }) => (
            <td key={name}>
              <div className="table__flex">
   <p
                className={classNames("table__num", [], {
                  empty: num === "-",
                })}
              >
                {num}
              </p>
              <p className="table__name">{name}</p>
              </div>
           
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
