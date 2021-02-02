import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Dashboard } from "./styled-component/styled-components";
import { Switch, Route } from "react-router-dom";
import Choice from "./components/Choice";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import ErrorPage from "./pages/ErrorPage";
import Menu from "./components/Menu";
import Settings from "./pages/Settings";
import SinglePage from "./pages/SinglePage";
import Transactions from "./pages/Transactions";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <Header />
      <Dashboard>
        <Switch>
          <Route exact path="/" component={Choice} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/incomes" component={Incomes} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/expenses/:id" component={SinglePage} />
          <Route exact path="/incomes/:id" component={SinglePage} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/overview" component={Overview} />
          <Route component={ErrorPage} />
        </Switch>
      </Dashboard>
      <Menu />
    </>
  );
}

export default App;
