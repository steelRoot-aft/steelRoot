import cardStyle from './card.module.css';

const Card = ({ icon, title, date, text, link, className }) => {
  return (
    <div className={`${cardStyle.block} ${className}`}>
      <div className={cardStyle.title}>
        <div className={cardStyle.icon}>
          <a href={link}>
            <img src={icon} alt={title} />
          </a>
        </div>
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>{date}</p>
      </div>
      <div className={cardStyle.text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
