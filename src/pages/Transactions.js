import React, { useContext, useState } from "react";
import { DataContext } from "../components/context";
import { SingleItemContainer } from "../styled-component/styled-components";
import Select from "../components/Select";

function Transactions() {
  const [sortingType, setSortingType] = useState({
    byNew: true,
    byOld: false,
    incomeFirst: false,
    expenseFirst: false,
  });
  const handleChange = (e) => {
    const tempObj = { ...sortingType };
    for (let key in tempObj) {
      tempObj[key] = false;
    }
    tempObj[e.target.value] = true;
    setSortingType(tempObj);
  };
  const context = useContext(DataContext);
  const { state, balance, currency } = context;
  const { incomes, expenses } = state;
  const all = [...incomes, ...expenses];
  const sorted = (() => {
    const { byNew, byOld, incomeFirst, expenseFirst } = sortingType;
    if (byNew) {
      return all.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (byOld) {
      return all.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (incomeFirst) {
      return [...incomes, ...expenses];
    } else if (expenseFirst) {
      return [...expenses, ...incomes];
    }
  })();
  const sortingOptions = Object.keys(sortingType);
  const value = (() => {
    for (let key in sortingType) {
      if (sortingType[key]) return key;
    }
  })();
  const getTime = (time) => {
    const hours =
      new Date(time).getHours() <= 9
        ? `0${new Date(time).getHours()}`
        : `${new Date(time).getHours()}`;
    const minutes =
      new Date(time).getMinutes() <= 9
        ? `0${new Date(time).getMinutes()}`
        : `${new Date(time).getMinutes()}`;
    const date = `${new Date(time).getDate()}/${new Date(
      time
    ).getMonth()}/${new Date(time).getFullYear()}`;
    return `${date} ${hours}:${minutes}`;
  };
  return (
    <SingleItemContainer>
      <Select
        title="Sort by"
        value={value}
        options={sortingOptions}
        handleChange={handleChange}
      />
      <h2 className="single-item-header text-center">
        Balance: {currency}
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
            <div className="text-center">
              {currency}
              {item.amount}
            </div>
            <div className="text-center">{getTime(item.date)}</div>
          </div>
        </div>
      ))}
    </SingleItemContainer>
  );
}

export default Transactions;
