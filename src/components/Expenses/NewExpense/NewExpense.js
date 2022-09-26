import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [btnClicked, setBtnClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setBtnClicked(false);
  };

  const btnClickedHandler = () => {
    setBtnClicked(true);
  };

  const btnResetHandler = () => {
    setBtnClicked(false);
  };

  return (
    <div className="new-expense">
      {btnClicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onBtnResetHandler={btnResetHandler}
        />
      ) : (
        <button onClick={btnClickedHandler} onSetClicked>
          Add New Expenses
        </button>
      )}
    </div>
  );
};

export default NewExpense;
