import { TClient } from '../../types/customTypes';
import ClientsList from './ClientsList';
import { useNavigate } from 'react-router-dom';
import style from './Clients.module.css';
import { useEffect, useState } from 'react';
import { getAllClients } from '../../Api/clientsService';

const Clients = () => {
  const [clients, setClients] = useState<TClient[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllClients();
      setClients(data);
    } catch (error) {
      setError('Un unexpected error occurred! Please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getClients();
  }, []);
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
      {clients && <ClientsList cardsData={clients} />}
    </div>
  );
};
export default Clients;
