import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dumyExpenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 1, 28),
  },
  {
    id: 2,
    title: "Home Insurance",
    amount: 296.67,
    date: new Date(2026, 1, 27),
  },
  {
    id: 3,
    title: "Bike Insurance",
    amount: 297.67,
    date: new Date(2025, 1, 26),
  },
  {
    id: 4,
    title: "Life Insurance",
    amount: 298.67,
    date: new Date(2024, 1, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dumyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  // React code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { item: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem> */}
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
