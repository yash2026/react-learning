// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const date = new Date(2024, 1, 27);
  // const title = "Car Insurance";
  // const amount = 294.67;
  // Array desturcturing use for useState react hook
  // const [title, setTitle] = useState(props.title);

  // let title = props.title;
  // const clickHandler = () => {
  //   setTitle("Hey My Name Is Yashpal");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
