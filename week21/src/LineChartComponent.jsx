import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["x", "dogs"],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
  [8, 33],
  [9, 40],
  [10, 32],
  [11, 35],
];

const options = {
  title: "Line Chart",
  hAxis: { title: "Time" },
  vAxis: { title: "Popularity" },
  legend: "none",
};

export default function LineChartComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Chart
        chartType="LineChart"
        width="200%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}

