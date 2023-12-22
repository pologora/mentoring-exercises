import Card from './Card';
import style from './Clients.module.css';
import { useState, ChangeEvent } from 'react';

type ClientsListProps = {
  cardsData: {
    id: number;
    imgSrc: string;
    name: string;
    surname: string;
    street: string;
    postCode: string;
    town: string;
    subRegion: string;
    phoneNumber: string;
  }[];
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
export default ClientsList;
