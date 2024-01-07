import { useNavigate } from 'react-router-dom';

import { useGetAllClients } from '../../Api/clientsService';
import style from './Clients.module.css';
import ClientsList from './ClientsList';

const Clients = () => {
  const { data, error, isError, isLoading } = useGetAllClients();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>Clients</h2>
      <button className={style.btn} onClick={() => navigate('/clients/add')}>
        Add client
      </button>
      {data && <ClientsList cardsData={data.data} />}
    </div>
  );
};
export default Clients;
