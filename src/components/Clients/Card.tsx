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
  imgSrc,
  name,
  phoneNumber,
  postCode,
  street,
  subRegion,
  surname,
  id,
  town,
}: CardProps) => {
  return (
    <Link to={`/clients/${id}`} className={style.card}>
      <div className={style.avatar}>
        <img src={imgSrc} alt='User avatar' className={style.avatarImg} />
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
