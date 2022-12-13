import React from "react";
import Cards from "../cards/Cards";
import Charts from "../charts/Charts";
import Header from "../header/Header";
import Table from "../table/Table";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Header />
      <main className="dashboard__main">
        <Cards />
        <Charts />
        <Table />
      </main>
    </section>
  );
};

export default Dashboard;
