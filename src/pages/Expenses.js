import React from "react";
import { expenses } from "../components/services";
import SingleItem from "../components/SingleItem";
import { Expenses } from "../styled-component/styled-components";

function ExpensesComponent() {
  return (
    <Expenses>
      {expenses.map((expense, index) => (
        <SingleItem
          title={expense.title}
          image={expense.image}
          link={expense.link}
          key={index}
        />
      ))}
    </Expenses>
  );
}

export default ExpensesComponent;
