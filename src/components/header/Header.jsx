import React from "react";
import { Search } from "../../assets";
import { useAppContext } from "../../context/AppContext";
import { notificationsIcons } from "../../utils/data";
import "./Header.scss";

const Header = () => {
  const { toggleSidebar, setToggleSidebar } = useAppContext();
  console.log("first", toggleSidebar)

  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <header className="header">
      <button onClick={handleSidebarToggle} aria-label="open menu">
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#990D81" fillRule="evenodd">
            <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path>
          </g>
        </svg>
      </button>
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
        {notificationsIcons.map(({ icon, altText }) => (
          <img key={altText} src={icon} alt={altText} />
        ))}
      </section>
    </header>
  );
};

export default Header;
