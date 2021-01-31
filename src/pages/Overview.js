import React, { useContext, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { DataContext } from "../components/context";

function Overview() {
  const [show, setShow] = useState(false);
  const context = useContext(DataContext);
  const { state } = context;
  const { incomes, expenses } = state;
  const incomeLabels = [...new Set(incomes.map((income) => income.category))];
  const expenseLabels = [
    ...new Set(expenses.map((expense) => expense.category)),
  ];
  console.log(expenseLabels);
  const incomeObj = {};
  const expenseObj = {};

  incomeLabels.forEach((n) => (incomeObj[n] = []));
  incomes.forEach((income) => {
    return incomeObj[income.category].push(parseFloat(income.amount));
  });

  expenseLabels.forEach((n) => (expenseObj[n] = []));
  expenses.forEach((expense) => {
    return expenseObj[expense.category].push(parseFloat(expense.amount));
  });

  let incomeData = Object.values(incomeObj).map((value) => value);
  incomeData = incomeData.map((value) => {
    return value.reduce((acc, curr) => acc + curr, 0);
  });

  let expenseData = Object.values(expenseObj).map((value) => value);
  expenseData = expenseData.map((n) => {
    return n.reduce((acc, curr) => acc + curr, 0);
  });

  const incomeChartData = {
    labels: incomeLabels,
    datasets: [
      {
        label: "Income overview",
        backgroundColor: "rgba(58, 223, 43, 0.5)",
        hoverBackgroundColor: "rgba(58, 223, 43, 0.8)",
        hoverBackgroundColor: "rgb(58, 223, 43)",
        borderWidth: 1,
        data: incomeData,
      },
    ],
  };

  const expenseChartData = {
    labels: expenseLabels,
    datasets: [
      {
        label: "Expense overview",
        backgroundColor: "rgba(187, 8, 8, 0.5)",
        hoverBackgroundColor: "rgba(187, 8, 8, 0.8)",
        hoverBorderColor: "rgb(187, 8, 8)",
        borderWidth: 1,
        data: expenseData,
      },
    ],
  };

  return (
    <div className="overview">
      <div className="income-overview">
        <Doughnut
          data={incomeChartData}
          option={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="expense-overview">
        <Bar
          data={expenseChartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default Overview;
