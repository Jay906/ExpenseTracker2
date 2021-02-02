import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { currencies } from "./services";

export const DataContext = createContext();

export default function DataProvider({
  children,
  incomes,
  expenses,
  settingParams,
}) {
  const [state, setState] = useState({ incomes, expenses });
  const totalIncome =
    state.incomes.reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const totalExpense =
    state.expenses.reduce((acc, curr) => acc + curr.amount, 0) || 0;
  const balance = totalIncome - totalExpense;

  const [settings, setSettings] = useState({
    currency: settingParams.currency || currencies[0].value,
  });

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

  const changeSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const tempObj = { ...settings };
    tempObj[name] = value;
    console.log(tempObj);
    setSettings(tempObj);
    localStorage.setItem("settings", JSON.stringify(tempObj));
    console.log(localStorage.getItem("settings"));
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
        ...settings,
        changeSelect,
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
