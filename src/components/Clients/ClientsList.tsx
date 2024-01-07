import { ChangeEvent, useState } from 'react';

import type { TClient } from '../../types/customTypes';
import Card from './Card';
import style from './Clients.module.css';

type ClientsListProps = {
  cardsData: TClient[];
};

const ClientsList = ({ cardsData }: ClientsListProps) => {
  const [filter, setFilter] = useState('');

  const cardsElements = cardsData
    .filter((card) => card.name.toLowerCase().includes(filter.toLowerCase()))
    .map((card) => <Card {...card} key={card.phoneNumber} />);

  const filterChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };
  // todo debounce
  return (
    <div>
      <div className={style.searchContainer}>
        <input id='name' name='name' type='text' onChange={filterChangeHandler} />
        <label htmlFor='name'>Wyszukaj po imieniu</label>
      </div>
      <div className={style.cardsList}>{cardsElements}</div>
    </div>
  );
};
export default ClientsList;
