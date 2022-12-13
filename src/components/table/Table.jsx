import React from "react";
import "./Table.scss";
import { Micheal, Bolu, Miriam, Chioma, RightArrow } from "../../assets";

const styleDetails = (img, name, email) => {
  return (
    <div className="namemail">
      <div className="namemail__picture">
        <img src={img} alt="Micheal" />
      </div>
      <div className="namemail__details">
        <p className="namemail__details--name">{name}</p>
        <span className="namemail__details--email">{email}</span>
      </div>
    </div>
  );
};

const statusFormatter = (status) => {
  return (
    <span
      className={
        status === "Pending"
          ? "status pendingStatus"
          : status === "Active"
          ? "status activeStatus"
          : ""
      }
    >
      {status}
    </span>
  );
};

let colsData = {
  "name/email": "Name/Email",
  type: "Type",
  status: "Status",
  date: "Date",
  "": "",
};

let rowsData = [
  {
    "name/email": styleDetails(Micheal, "Micheal Olu", "micheal@mail.com"),
    type: "New Agent",
    status: statusFormatter("Pending"),
    date: "23/04/18",
    "": <RightArrow />,
  },
  {
    "name/email": styleDetails(Chioma, "Chioma James", "alexa@mail.com"),
    type: "Account Deactivation",
    status: statusFormatter("Pending"),
    date: "23/12/20",
    "": <RightArrow />,
  },
  {
    "name/email": styleDetails(Bolu, "Boluwatife Ade", "laure@mail.com"),
    type: "New User",
    status: statusFormatter("Active"),
    date: "13/04/19",
    "": <RightArrow />,
  },
  {
    "name/email": styleDetails(Miriam, "Miriam Eric", "miriam@mail.com"),
    type: "Email Auth",
    status: statusFormatter("Active"),
    date: "03/04/21",
    "": <RightArrow />,
  },
];

const Table = () => {
  const head = () => {
    let columns = Object.values(colsData).map((colName) => {
      return <th key={colName}>{colName}</th>;
    });

    return <tr>{columns}</tr>;
  };

  const body = () => {
    return rowsData.map((row, idx) => {
      let values = Object.entries(colsData).map(([colKey, colName]) => {
        return (
          <td key={colName} data-label={colName}>
            {row[colKey]}
          </td>
        );
      });

      return <tr key={idx}>{values}</tr>;
    });
  };

  return (
    <section className="requests">
      <h4>Recent Requests</h4>
      <table className="requests__table">
        <thead>{head()}</thead>
        <tbody>{body()}</tbody>
      </table>
    </section>
  );
};

export default Table;
