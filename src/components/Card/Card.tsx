import style from './card.module.css';
import { AiFillAlert } from 'react-icons/ai';

type CardProps = {
  imgSrc: string;
  name: string;
  surname: string;
  street: string;
  postCode: string;
  town: string;
  subRegion: string;
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
  town,
}: CardProps) => {
  return (
    <div className={style.card}>
      <AiFillAlert />
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
    </div>
  );
};
export default Card;
