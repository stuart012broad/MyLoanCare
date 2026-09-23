import React, { useState } from "react";
import "./ExpenseForm.css";

const initialState = {
  recipient: "",
  category: "Employee Reward",
  amount: "",
  date: new Date().toISOString().slice(0, 10),
};

function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState(initialState);

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.recipient.trim() || !form.amount || Number(form.amount) <= 0) return;
    onAdd({ ...form, amount: Number(form.amount) });
    setForm(initialState);
  };

  return (
    <form className="card expense-form" onSubmit={submit}>
      <h2>Add reward expense</h2>

      <label>
        Recipient
        <input
          name="recipient"
          value={form.recipient}
          onChange={update}
          placeholder="Recipient name"
          required
        />
      </label>

      <label>
        Category
        <select name="category" value={form.category} onChange={update}>
          <option>Employee Reward</option>
          <option>Customer Incentive</option>
          <option>Survey Incentive</option>
          <option>Rebate / Claim</option>
          <option>Other</option>
        </select>
      </label>

      <div className="form-row">
        <label>
          Amount
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={update}
            placeholder="0.00"
            required
          />
        </label>

        <label>
          Date
          <input name="date" type="date" value={form.date} onChange={update} />
        </label>
      </div>

      <button type="submit">Add expense</button>
    </form>
  );
}

export default ExpenseForm;
