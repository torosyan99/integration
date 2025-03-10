import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

import "./Table.css";

const Table = ({ className, tableArray = [] }) => {
  return (
    <table className={classNames("table", [className])}>
      <tbody>
        {tableArray.map((innerArray, index) => (
          <tr key={index}>
            {innerArray.map(({ name, num },index) => (
              <td key={index}>
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
      </tbody>
    </table>
  );
};

export default Table;
