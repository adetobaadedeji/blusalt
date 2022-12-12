import React from "react";
import Cards from "../cards/Cards";
import Charts from "../charts/Charts";
import Header from "../header/Header";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Header />
      <main className="dashboard__main">
        <Cards />
        <Charts />
      </main>
    </section>
  );
};

export default Dashboard;
