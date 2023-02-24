import React, { useState } from "react";
import ExpenseForm from "./expenseForm";
import IncomeForm from "./incomeForm";

function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const addIncome = (income) => {
    setIncomes([...incomes, { ...income, id: incomes.length + 1 }]);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const getTotalIncomes = () => {
    return incomes.reduce((total, income) => total + income.amount, 0);
  };

  const getBalance = () => {
    return getTotalIncomes() - getTotalExpenses();
  };

  return (
    <div className="App">
      <h1>Family Budget Manager</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Expenses</h2>
            <ExpenseForm onAddExpense={addExpense} />
            <div className="expenses">
              {expenses.map((expense) => (
                <div className="expense" key={expense.id}>
                  <div className="expense-amount">{expense.amount}</div>
                  <div className="expense-description">{expense.description}</div>
                </div>
              ))}
            </div>
            <div className="total-expenses">
              <strong>Total Expenses:</strong> {getTotalExpenses()}
            </div>
          </div>
          <div className="col-md-6">
            <h2>Incomes</h2>
            <IncomeForm onAddIncome={addIncome} />
            <div className="incomes">
              {incomes.map((income) => (
                <div className="income" key={income.id}>
                  <div className="income-amount">{income.amount}</div>
                  <div className="income-description">{income.description}</div>
                </div>
              ))}
            </div>
            <div className="total-incomes">
              <strong>Total Incomes:</strong> {getTotalIncomes()}
            </div>
          </div>
        </div>
        <div className="balance">
          <strong>Balance:</strong> {getBalance()}
        </div>
      </div>
    </div>
  );
}

export { Budget };

