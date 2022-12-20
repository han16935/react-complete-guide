import React from "react";
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
  return (
    <div className="new-expense">
      <ExpenseForm expenseDatatoNew={expenseDataToApp} />
    </div>
  );
};

export default NewExpense;
