import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";

function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearToExpense = (year) => {
    setFilteredYear(year);
  };

  const expenseItems = expenses.map((v, i) => (
    <ExpenseItem date={v.date} amount={v.amount} title={v.title} />
  ));

  return (
    <Card className="expense">
      <ExpenseFilter
        filteredYear={filteredYear}
        yearToExpense={yearToExpense}
      />
      {expenses.map((v, i) => (
        <ExpenseItem
          key={v.id}
          date={v.date}
          amount={v.amount}
          title={v.title}
        />
      ))}
    </Card>
  );
}
export default Expense;
