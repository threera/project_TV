import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Daily",
    },
  },
};

const labels = ["01 - 07", "08 - 14", "15 - 21", "22 - 28", "29 - 31"];

export const data = {
  labels,
  datasets: [
    {
      label: "MON",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(255, 210, 0, 1)",
    },
    {
      label: "TUE",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(219, 97, 149, 1)",
    },
    {
      label: "WED",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(68, 178, 129, 1)",
    },
    {
      label: "THU",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(255, 178, 108, 1)",
    },
    {
      label: "FRI",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(0, 178, 255, 1)",
    },
    {
      label: "SAT",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(167, 102, 255, 1)",
    },
    {
      label: "SUN",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      backgroundColor: "rgba(255, 0, 0, 1)",
    },
  ],
};

function VerticalBar() {
  return <Bar options={options} data={data} />;
}

export default VerticalBar;
