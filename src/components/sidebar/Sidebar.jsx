import "./Sidebar.scss";
import { DownArrow, Logo, User } from "../../assets";
import { sidebarData } from "../../utils/data";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Sidebar = () => {
  // this is to show the active state on any of the menu
  // a link with an active state will be used it a real project
  const [selected, setSelected] = useState(0);

  const { toggleSidebar, setToggleSidebar } = useAppContext();

  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <aside
      className={`sidebar ${toggleSidebar ? "openSidebar" : "closeSidebar"}`}
    >
      <section className="sidebar--container">
        <section className="sidebar--container__logocontainer">
          <img src={Logo} alt="Logo" />
        </section>
        <span className="sidebar--container__hrline"></span>
        <nav className="sidebar--container__nav">
          <ul>
            {sidebarData.map(({ icon, title, arrow }, index) => (
              <li
                key={title}
                className={selected === index ? "active" : ""}
                onClick={() => setSelected(index)}
              >
                <img src={icon} alt={title} />
                <span className="title">{title}</span>
                {arrow ? (
                  <div className="arrow-container">
                    <img src={DownArrow} alt="arrow-down" />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <section className="sidebar--container__user">
          <img src={User} alt="User Profile" />
          <section className="sidebar--container__user--details">
            <div className="sidebar--container__user--details--name">
              Nafisa Sh.
            </div>
            <span className="sidebar--container__user--details--position">
              Support manager
            </span>
          </section>
        </section>
      </section>
      <button
        onClick={handleSidebarToggle}
        aria-label="close menu"
        className="sidebar--button"
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
            fill="#990D81"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </aside>
  );
};

export default Sidebar;
