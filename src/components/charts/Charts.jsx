import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Charts.scss";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  return (
    <section className="charts">
      <section className="charts__left">
        <section className="charts__left--info">
          <section className="charts__left--info__title">
            <h2>User Inflow Statistics</h2>
            <p>Nov - July</p>
          </section>
          <section className="charts__left--info__data">
            <div>
              <p className="agents">AGENTS</p>
              <span>475273</span>
            </div>
            <div>
              <p className="users">USERS</p>
              <span>782396</span>
            </div>
          </section>
        </section>
        <section className="charts__left--graph">
          <UsersInflowChart />
        </section>
      </section>
      <section className="charts__right">
        <section className="charts__right--graph">
          <NewUsersChart />
        </section>
        <section className="charts__right--info">
          <h3>New Users</h3>
          <p>
            <span>(+23%)</span> than last week
          </p>
        </section>
      </section>
    </section>
  );
};

export default Charts;

const UsersInflowChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#B9B9B9",
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#B9B9B9",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Agents",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "#5F2EEA",
        backgroundColor: "#5F2EEA",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Users",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "#4BDE97",
        backgroundColor: "#4BDE97",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        // pointHoverRadius: 0,
      },
    ],
  };

  return <Line options={chartOptions} data={chartData} />;
};

const NewUsersChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
          color: "#ffffff",
        },
        grid: {
          display: true,
          drawBorder: false,
          tickColor: "rgba(255, 255, 255, 0.2)",
          borderDash: [5],
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: "white",
        borderRadius: 4,
      },
    },
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Month",
        data: [800, 600, 400, 990, 750],
        barThickness: 5,
        maxBarThickness: 6,
        color: "#ffffff",
      },
    ],
  };

  return (
      <Bar
        options={chartOptions}
        data={chartData}
        height={`250px`}
        style={{ width: "95%" }}
      />
  );
};
