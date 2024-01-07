import { Link } from 'react-router-dom';

import style from './card.module.css';

type CardProps = {
  imgSrc?: string;
  id?: string;
  name: string;
  surname: string;
  street: string;
  postCode: string;
  town: string;
  subRegion?: string;
  phoneNumber: string;
};

const Card = ({
  id,
  imgSrc,
  name,
  phoneNumber,
  postCode,
  street,
  subRegion,
  surname,
  town,
}: CardProps) => {
  return (
    <Link className={style.card} to={`/clients/${id}`}>
      <div className={style.avatar}>
        <img alt='User avatar' className={style.avatarImg} src={imgSrc} />
      </div>
      <div className='data'>
        <p className='name' id='name'>
          {name} {surname}
        </p>
        <p className='adress'>
          {street} {postCode}
        </p>
        <p className='city'>{town}</p>
        <p className='region'>{subRegion}</p>
        <p className='phone'>{phoneNumber}</p>
      </div>
    </Link>
  );
};
export default Card;
