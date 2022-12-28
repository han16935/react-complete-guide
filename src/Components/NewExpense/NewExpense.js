import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpenses }) => {
  const expenseDataToApp = (data) => {
    const newData = {
      ...data,
      id: Math.random(),
    };
    addExpenses(newData);
  };

  const [count, setCount] = useState(false);
  const changeCountHandler = () => {
    count === false ? setCount(true) : setCount(false);
  };
  return (
    <div className="new-expense">
      {count && <ExpenseForm expenseDatatoNew={expenseDataToApp} />}
      {!count && (
        <button type="button" onClick={changeCountHandler}>
          Add New Expense
        </button>
      )}
      {count && (
        <button type="button" onClick={changeCountHandler}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default NewExpense;
