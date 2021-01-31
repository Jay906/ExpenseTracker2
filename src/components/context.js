import React, { createContext, useState, useEffect } from "react";
import { currencies } from "./services";
import { useLocation } from "react-router-dom";

export const DataContext = createContext();

export default function DataProvider({ children, incomes, expenses }) {
  const [state, setState] = useState({ incomes, expenses });
  console.log(state, incomes, expenses);
  const totalIncome =
    state.incomes.reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const totalExpense =
    state.expenses.reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const balance = totalIncome - totalExpense;

  const [currency, setCurrency] = useState(currencies[0]);

  const { pathname } = useLocation();

  const defineCategory = () => {
    if (pathname.includes("expenses")) {
      return "expenses";
    }
    return "incomes";
  };

  const filterItems = (category) => {
    const collection =
      defineCategory() === "incomes" ? state.incomes : state.expenses;
    const filteredItems = collection.filter(
      (item) => item.category === category
    );
    return filteredItems;
  };

  const deleteItem = (id) => {
    if (window.confirm("Do you wanna delete item?")) {
      const category = defineCategory();
      const tempState = { ...state };
      const item = tempState[category].find((n) => n.id === id);
      const index = tempState[category].indexOf(item);
      tempState[category].splice(index, 1);
      setState(tempState);
      localStorage.setItem(category, JSON.stringify(tempState[category]));
    }
  };

  const editItem = (id) => {
    const category = defineCategory();
    const tempState = { ...state };
    const index = tempState[category].indexOf(
      tempState[category].find((n) => n.id === id)
    );
    const item = tempState[category].splice(index, 1);
    setState(tempState);
    return item;
  };

  const changeCurrency = (e) => {
    const element = currencies.find(
      (currency) => currency.value === e.target.value
    );
    setCurrency(element);
  };

  const onSubmit = (newItem) => {
    const category = defineCategory();
    const tempState = { ...state };
    tempState[category].push(newItem);
    setState(tempState);
    localStorage.setItem(category, JSON.stringify(tempState[category]));
  };

  const deleteData = () => {
    setState({ incomes: [], expenses: [] });
    localStorage.setItem("incomes", JSON.stringify([]));
    localStorage.setItem("expenses", JSON.stringify([]));
  };

  return (
    <DataContext.Provider
      value={{
        state,
        totalExpense,
        totalIncome,
        balance,
        currency,
        changeCurrency,
        filterItems,
        deleteItem,
        editItem,
        onSubmit,
        deleteData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
