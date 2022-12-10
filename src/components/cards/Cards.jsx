import "./Cards.scss";
import { cards } from "../../utils/data";

const Cards = () => {
  return (
    <section className="cards">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </section>
  );
};

const Card = ({
  Icon,
  background,
  value,
  title,
  Arrow,
  percent,
  iconColor,
  time,
  color,
}) => {
  return (
    <section className="card">
      <section className="card--icon" style={{ backgroundColor: background }}>
        <Icon style={{ color: iconColor }} />
      </section>
      <section className="card--details">
        <p className="card--details__value">{value}</p>
        <span className="card--details__title">{title}</span>
        <div className="card--details__analytics">
          <Arrow />
          <span
            className="card--details__analytics--percent"
            style={{ color: color }}
          >
            {percent}
          </span>
          <span className="card--details__analytics--time">{time}</span>
        </div>
      </section>
    </section>
  );
};

export default Cards;
