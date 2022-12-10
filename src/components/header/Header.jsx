import React from "react";
import { Search } from "../../assets";
import { notificationsIcons } from "../../utils/data";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">DashBoard</h1>
      <section className="header__search">
        <img src={Search} alt="Search Icon" />
        <label htmlFor="search" className="sr-only">
          Search Basket
        </label>
        <input
          id="search"
          type="text"
          placeholder="Enter keywords ..."
          autoComplete="off"
        />
      </section>
      <section className="header__notifications">
        {notificationsIcons.map(({icon, altText}) => (
          <img src={icon} alt={altText} />
        ))}
      </section>
    </header>
  );
};

export default Header;
