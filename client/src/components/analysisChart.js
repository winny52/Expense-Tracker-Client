import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Analyse() {
  const user = "user1";
  const [transportSum, setTransportSum] = useState(0);
  const [foodSum, setFoodSum] = useState(0);
  const [billSum, setBillSum] = useState(0);
  const [shoppingSum, setShoppingSum] = useState(0);
  const [entertainmentSum, setEntertainmentSum] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/${user}/expenses`)
      .then((resp) => resp.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Calculate the sum of expenses for each category within the current week
          const transportExpenses = data.filter(
            (expense) => expense.category === "Transportation"
          );
          const sumTransport = transportExpenses.reduce(
            (accumulator, currentValue) =>
              accumulator + parseFloat(currentValue.amount),
            0
          ).toFixed(2);

          const foodExpenses = data.filter(
            (expense) => expense.category === "Food"
          );
          const sumFood = foodExpenses.reduce(
            (accumulator, currentValue) =>
              accumulator + parseFloat(currentValue.amount),
            0
          ).toFixed(2);

          const billExpenses = data.filter(
            (expense) => expense.category === "Bill"
          );
          const sumBill = billExpenses.reduce(
            (accumulator, currentValue) =>
              accumulator + parseFloat(currentValue.amount),
            0
          ).toFixed(2);

          const shoppingExpenses = data.filter(
            (expense) => expense.category === "Shopping"
          );
          const sumShopping = shoppingExpenses.reduce(
            (accumulator, currentValue) =>
              accumulator + parseFloat(currentValue.amount),
            0
          ).toFixed(2);

          const entertainmentExpenses = data.filter(
            (expense) => expense.category === "Entertainment"
          );
          const sumEntertainment = entertainmentExpenses.reduce(
            (accumulator, currentValue) =>
              accumulator + parseFloat(currentValue.amount),
            0
          ).toFixed(2);

          setTransportSum(sumTransport);
          setFoodSum(sumFood);
          setBillSum(sumBill);
          setShoppingSum(sumShopping);
          setEntertainmentSum(sumEntertainment);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);

  const data = {
    labels: ["Transport", "Food", "Bill", "Shopping", "Entertainment"],
    datasets: [
      {
        label: "Categories",
        data: [
          transportSum,
          foodSum,
          billSum,
          shoppingSum,
          entertainmentSum,
        ],
        borderColor: "orange",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="w-3/5 bg-blue-200 ml-16">
        <hi>hello</hi>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default Analyse;
