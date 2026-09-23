import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Receipt from "./components/Receipt";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((current) => [
      { ...expense, id: Date.now() },
      ...current,
    ]);
  };

  const removeExpense = (id) => {
    setExpenses((current) => current.filter((expense) => expense.id !== id));
  };

  const total = useMemo(
    () => expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0),
    [expenses]
  );

  return (
    <div className="app">
      <Header total={total} />
      <main className="container">
        <section className="intro">
          <p className="eyebrow">Giftogram demo</p>
          <h1>Reward & Expense Tracker</h1>
          <p>
            Record Giftogram-related reward expenses in one simple dashboard.
            This demo does not connect to real Giftogram accounts or process payments.
          </p>
        </section>

        <div className="grid">
          <ExpenseForm onAdd={addExpense} />
          <Receipt expenses={expenses} total={total} />
        </div>

        <ExpenseList expenses={expenses} onRemove={removeExpense} />
      </main>
    </div>
  );
}

export default App;
