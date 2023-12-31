import ClientsList from './ClientsList';
import { useNavigate } from 'react-router-dom';
import style from './Clients.module.css';
import { getAllClients } from '../../Api/clientsService';
import { useQuery } from '@tanstack/react-query';

const Clients = () => {
  const { isError, error, isLoading, data } = useQuery({
    queryKey: ['clients'],
    queryFn: getAllClients,
  });

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
      <button onClick={() => navigate('/clients/add')} className={style.btn}>
        Add client
      </button>
      {data && <ClientsList cardsData={data.data} />}
    </div>
  );
};
export default Clients;
