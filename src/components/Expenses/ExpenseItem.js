import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log("Expense Item evulated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  //  these are writen only demo purposes, that is why button elemnt and these codes are comment now.};

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button>  It has been writen only demo purposes, that is why it is a comments now. */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
