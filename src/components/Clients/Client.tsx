import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/multipleData';
import style from './Clients.module.css';
import { IoMdArrowBack } from 'react-icons/io';

const Client = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentClient = data.find((item) => item.id.toString() === id);

  if (!currentClient) {
    throw new Error();
  }

  const clientDataElements = Object.entries(currentClient).map(
    ([key, value]) => {
      if (key === 'imgSrc') {
        return null;
      }

      return (
        <p key={key} className={style.clientProps}>
          <span className={style.propTitle}>{key}</span>
          <span className={style.propValue}>{value}</span>
        </p>
      );
    }
  );

  return (
    <div className={style.client}>
      <button
        className={`${style.goBackBtn} ${style.btn}`}
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        Back
      </button>
      <h3 className={style.clientTitle}>Client</h3>
      <img
        src={currentClient.imgSrc}
        alt='client'
        className={style.clientImg}
      />
      <div className={style.propsContainer}>{clientDataElements}</div>
      <div className={style.actionBtnsContainer}>
        <button
          className={`${style.editBtn} ${style.btn}`}
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default Client;
