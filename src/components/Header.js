import React, { useContext } from "react";
import { Header } from "../styled-component/styled-components";
import { getDate } from "./services";
import { DataContext } from "./context";

function HeaderComponent() {
  const context = useContext(DataContext);
  const { totalIncome, totalExpense, balance, currency } = context;
  return (
    <Header>
      <section className="header-top">
        <p className="success">Available Savings</p>
        <h2>{currency} 0</h2>
        <p>{getDate()}</p>
      </section>
      <div className="banner">
        <div className="text-center">
          <p>
            {currency} {totalIncome}
          </p>
          <p>Income</p>
        </div>
        <div className="text-center">
          <p>
            {currency} {totalExpense}
          </p>
          <p>Expense</p>
        </div>
        <div className="text-center">
          <p>
            {currency} {balance}
          </p>
          <p>Balance</p>
        </div>
      </div>
    </Header>
  );
}

export default HeaderComponent;
