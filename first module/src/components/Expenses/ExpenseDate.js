import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date-box">
      <div className="date-box-month">{month}</div>
      <div className="date-box-year">{year}</div>
      <div className="date-box-day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
