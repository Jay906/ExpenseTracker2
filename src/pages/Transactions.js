import React, { useContext } from "react";
import { DataContext } from "../components/context";
import { SingleItemContainer } from "../styled-component/styled-components";

function Transactions() {
  const context = useContext(DataContext);
  const { state, balance, currency } = context;
  const { incomes, expenses } = state;
  const all = [...incomes, ...expenses];
  const sorted = all.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(incomes);
  return (
    <SingleItemContainer>
      <h2 className="single-item-header text-center">
        Balance: {currency.value}
        {balance}
      </h2>
      {sorted.map((item) => (
        <div
          className={`element-container ${
            incomes.includes(item) ? "bg-success" : "bg-danger"
          }`}
          key={item.id}
        >
          <div className="element-item">
            <div>{item.desc}</div>
            <div className="text-center">{item.amount}</div>
            <div className="text-center">
              {new Date(item.date).toDateString()}
            </div>
          </div>
        </div>
      ))}
    </SingleItemContainer>
  );
}

export default Transactions;
