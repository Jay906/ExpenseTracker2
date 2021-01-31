import React from "react";
import {
  FaMoneyCheck as Money,
  FaReceipt as Transaction,
} from "react-icons/fa";
import { GiHistogram as Overview } from "react-icons/gi";
import { MdSettings as Settings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Menu } from "../styled-component/styled-components";

function MenuComponent() {
  return (
    <Menu>
      <NavLink exact activeClassName="active" to="/" className="center">
        <div className="image">
          <Money />
        </div>
        Main
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to="/transactions"
        className="center"
      >
        <div className="image">
          <Transaction />
        </div>
        Transactions
      </NavLink>
      <NavLink exact activeClassName="active" to="/overview" className="center">
        <div className="image">
          <Overview />
        </div>
        Overview
      </NavLink>
      <NavLink exact activeClassName="active" to="/settings" className="center">
        <div className="image">
          <Settings />
        </div>
        Settings
      </NavLink>
    </Menu>
  );
}

export default MenuComponent;
