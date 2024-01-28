import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2024, 1, 28) },
    { title: "Home Insurance", amount: 296.67, date: new Date(2024, 1, 27) },
    { title: "Bike Insurance", amount: 297.67, date: new Date(2024, 1, 26) },
    { title: "Life Insurance", amount: 298.67, date: new Date(2024, 1, 25) },
  ];

  // React code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { item: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem> */}
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
