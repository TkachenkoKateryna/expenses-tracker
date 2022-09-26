import React from "react";
import "./ExepenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Common/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
