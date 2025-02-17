import cardStyle from './card.module.css'

const Card = ({image, text, name, raiting}) => {
  // Генерируем массив звездочек в зависимости от рейтинга
  const stars = [];
  const fullStar = '★'; // Закрашенная звезда
  const emptyStar = '☆'; // Полая звезда

  // Создаем 5 звездочек
  for (let i = 1; i <= 5; i++) {
    if (i <= raiting) {
      stars.push(fullStar); // Закрашенная звезда
    } else {
      stars.push(emptyStar); // Полая звезда
    }
  }

  return (
    <div className={cardStyle.body}>
      <div className={cardStyle.icon}>
        <div className={cardStyle.wrapper}>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className={cardStyle.text}>
        <p>{text}</p>
      </div>
      <div className={cardStyle.name}>
        <h3>{name}</h3>
      </div>
      <div className={cardStyle.raiting}>
        {stars.map((star, index) => (
          <span key={index} className={cardStyle.star}>
            {star}
          </span>
        ))}
        <p>{raiting}</p>
      </div>
    </div>
  );
}

export default Card