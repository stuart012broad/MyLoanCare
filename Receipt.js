import React from "react";
import "./Receipt.css";

function Receipt({ expenses, total }) {
  return (
    <aside className="receipt card">
      <div className="receipt-top">
        <span>Giftogram</span>
        <span>Summary</span>
      </div>

      <h2>Reward receipt</h2>

      {expenses.length === 0 ? (
        <p className="receipt-muted">Your receipt summary will appear here after you add an expense.</p>
      ) : (
        <>
          <div className="receipt-lines">
            {expenses.slice(0, 5).map((expense) => (
              <div className="receipt-line" key={expense.id}>
                <span>{expense.recipient}</span>
                <strong>${Number(expense.amount).toFixed(2)}</strong>
              </div>
            ))}
          </div>

          {expenses.length > 5 && (
            <p className="receipt-muted">Showing the five most recent entries.</p>
          )}

          <div className="receipt-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </>
      )}

      <p className="receipt-disclaimer">
        Demo only — no real Giftogram transaction is created.
      </p>
    </aside>
  );
}

export default Receipt;
