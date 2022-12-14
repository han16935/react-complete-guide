import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expense.css";

function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearToExpense = (year) => {
    // select로 고른 year을 바꿈
    setFilteredYear(year);
  };

  const filteredYears = expenses.filter(
    (v, i) => v.date.getFullYear().toString() === filteredYear
  );

  let expenseItems = <p>No Expenses found.</p>;

  if (filteredYears.length > 0) {
    expenseItems = filteredYears.map((v, i) => (
      <ExpenseItem key={v.id} date={v.date} amount={v.amount} title={v.title} />
    ));
  }

  return (
    <Card className="expense">
      <ExpenseFilter
        filteredYear={filteredYear}
        yearToExpense={yearToExpense}
      />
      <ExpensesList filteredYears={filteredYears} />
    </Card>
  );
}
export default Expense;
