import React from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
      ;
    </ul>
  );
};

export default ExpensesList;
