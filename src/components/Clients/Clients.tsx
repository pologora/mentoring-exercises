import useAxios from '../../hooks/useAxios';
import { TClient } from '../../types/customTypes';
import ClientsList from './ClientsList';
import { useNavigate } from 'react-router-dom';
import style from './Clients.module.css';

const Clients = () => {
  const url = 'http://localhost:3000/clients';
  const { data, error, isLoading } = useAxios<TClient[]>(url);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Clients</h2>
      <button onClick={() => navigate('/clients/add')} className={style.btn}>
        Add client
      </button>
      {data && <ClientsList cardsData={data} />}
    </div>
  );
};
export default Clients;
