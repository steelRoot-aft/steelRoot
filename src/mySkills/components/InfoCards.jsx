import cardsStyle from './infoCards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({icon, title}) => {
  return (
    <div className={cardsStyle.body}>
      <FontAwesomeIcon icon={icon} className={cardsStyle.icon} />
      <h4>{title}</h4>
    </div>
  );
}

export default InfoCard
