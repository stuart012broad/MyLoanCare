import React from "react";
import "./ExpenseList.css";

function ExpenseList({ expenses, onRemove }) {
  return (
    <section className="list-section">
      <div className="section-heading">
        <h2>Recorded expenses</h2>
        <span>{expenses.length} {expenses.length === 1 ? "entry" : "entries"}</span>
      </div>

      {expenses.length === 0 ? (
        <div className="empty">No expenses recorded yet. Add your first reward above.</div>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <article className="expense-item" key={expense.id}>
              <div>
                <strong>{expense.recipient}</strong>
                <span>{expense.category} · {expense.date}</span>
              </div>
              <div className="expense-actions">
                <strong>${Number(expense.amount).toFixed(2)}</strong>
                <button onClick={() => onRemove(expense.id)} aria-label={`Remove ${expense.recipient}`}>
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ExpenseList;
