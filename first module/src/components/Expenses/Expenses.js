import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
