import cardsData from '../../data/multipleData';
import Card from '../Card/Card';
import style from './Wrapper.module.css';
import { useState, ChangeEvent } from 'react';

const Wrapper = () => {
  const [filter, setFilter] = useState('');

  const cardsElements = cardsData
    .filter((card) => card.name.toLowerCase().includes(filter.toLowerCase()))
    .map((card) => <Card {...card} key={card.phoneNumber} />);

  const filterChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <div>
      <div className={style.searchContainer}>
        <input
          type='text'
          id='name'
          name='name'
          onChange={filterChangeHandler}
        />
        <label htmlFor='name'>Wyszukaj po imieniu</label>
      </div>
      <div className={style.cardsList}>{cardsElements}</div>
    </div>
  );
};
export default Wrapper;
