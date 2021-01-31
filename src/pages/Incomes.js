import React from "react";
import { FlexTwoItems } from "../styled-component/styled-components";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";

function Incomes() {
  return (
    <FlexTwoItems>
      <Link to="/incomes/salary" className="success">
        <div className="image">
          <GiTakeMyMoney />
          Salary
        </div>
      </Link>
      <Link to="/incomes/others" className="success">
        <div className="image">
          <GiReceiveMoney />
          Others
        </div>
      </Link>
    </FlexTwoItems>
  );
}

export default Incomes;
