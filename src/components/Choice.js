import React from "react";
import { FlexTwoItems } from "../styled-component/styled-components";
import { FaMoneyCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function Choice() {
  return (
    <FlexTwoItems>
      <Link to="/incomes" className="success">
        <div className="image">
          <FaMoneyCheck />
        </div>
        Incomes
      </Link>
      <Link to="/expenses" className="danger">
        <div className="image">
          <FaMoneyCheck />
        </div>
        Expenses
      </Link>
    </FlexTwoItems>
  );
}

export default Choice;
