import React, { useState } from "react";

import Card from "../../Common/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpenseHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterExpense={filterExpenseHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
