import cardsData from '../../data/multipleData';
import Card from '../Card/Card';
import style from './Wrapper.module.css';

const Wrapper = () => {
  const cardsElements = cardsData.map((card) => (
    <Card {...card} key={card.phoneNumber} />
  ));
  return <div className={style.cardsList}>{cardsElements}</div>;
};
export default Wrapper;
