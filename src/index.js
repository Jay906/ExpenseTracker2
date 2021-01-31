import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./components/context";

const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider incomes={incomes} expenses={expenses}>
        <App />
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
