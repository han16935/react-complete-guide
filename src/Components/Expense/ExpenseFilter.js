import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ filteredYear, yearToExpense }) => {
  const test = (event) => {
    const year = event.target.value;
    yearToExpense(year);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select values={filteredYear} onChange={test}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020" selected>
            2020
          </option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
