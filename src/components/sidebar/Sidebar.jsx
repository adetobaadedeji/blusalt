import "./Sidebar.scss";
import { DownArrow, Logo, User } from "../../assets";
import { sidebarData } from "../../utils/data";
import { useState } from "react";

const Sidebar = () => {
  // this is to show the active state on any of the menu
  // a link with an active state will be used it a real project
  const [selected, setSelected] = useState(0);

  return (
    <aside className="sidebar">
      <section className="sidebar--container">
        <section className="sidebar--container__logocontainer">
          <img src={Logo} alt="Logo" />
        </section>
        <span className="sidebar--container__hrline" ></span>
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
    </aside>
  );
};

export default Sidebar;
