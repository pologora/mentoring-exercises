import { useNavigate, useParams } from 'react-router-dom';
import style from './Clients.module.css';
import { IoMdArrowBack } from 'react-icons/io';
import { TClient } from '../../types/customTypes';
import { deleteClient, getClientByID } from '../../Api/clientsApi';
import { useEffect, useState } from 'react';

const Client = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TClient | null>(null);
  const [error, setError] = useState<string>('');

  const handleGetClient = async (id: string) => {
    try {
      setIsLoading(true);
      const { data }: { data: TClient } = await getClientByID(id);
      setData(data);
    } catch (error) {
      setError('Cant get client data, try again later');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClient = async (id: string) => {
    try {
      setIsLoading(true);
      const result = await deleteClient(id);
      console.log(result);
      navigate('/clients');
    } catch (error) {
      setError('Error when trying to delete Client');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleGetClient(id);
    }
  }, [id]);

  if (!id) {
    return <div>Cant find id: {id}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Cant find any data</div>;
  }

  const clientDataElements = Object.entries(data).map(([key, value]) => {
    if (key === 'imgSrc') {
      return null;
    }

    return (
      <p key={key} className={style.clientProps}>
        <span className={style.propTitle}>{key}</span>
        <span className={style.propValue}>{value}</span>
      </p>
    );
  });

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
      <img src={data.imgSrc} alt='client' className={style.clientImg} />
      <div className={style.propsContainer}>{clientDataElements}</div>
      <div className={style.actionBtnsContainer}>
        <button
          className={style.deleteBtn}
          onClick={() => handleDeleteClient(id)}
        >
          Delete
        </button>
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
