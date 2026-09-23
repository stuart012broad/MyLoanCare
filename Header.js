import React from "react";
import "./Header.css";

function Header({ total }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <strong className="brand">Giftogram</strong>
          <span className="brand-note">Expense & Rewards Demo</span>
        </div>
        <div className="total">
          <span>Total recorded</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
