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

  return (
    <Card className="expense">
      <ExpenseFilter
        filteredYear={filteredYear}
        yearToExpense={yearToExpense}
      />
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />

      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </Card>
  );
}

export default Expense;
