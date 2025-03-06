import React, { useMemo, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const DateC = () => {
  const [value, onChange] = useState(new Date("01.02.2003"));
  const [show, setShow] = useState(false);
  const date = useMemo(() => value.getDate(), [value]);
  const month = useMemo(() => value.getMonth() + 1, [value]);
  return (
    <div className="top__date">
      <button
        className="top__date-button"
        onClick={() => setShow((s) => !s)}
      >{`${date < 9 ? "0" + date : date}.${
        month < 9 ? "0" + month : month
      }.${value.getFullYear()}`}</button>
      {show && (
        <Calendar
          className={"top__calendar"}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default DateC;
