import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expense({ expenses }) {
  return (
    <Card className="expense">
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
