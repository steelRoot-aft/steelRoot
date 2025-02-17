import cardsStyle from './card.module.css';

const Card = ({ image, link, title, className }) => {
  return (
    <div className={`${cardsStyle.body} ${className}`}>
      <a href={link}>
        <div className={cardsStyle.image}>
          <img src={image} alt={title} />
        </div>
        <div className={cardsStyle.title}>
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default Card;
