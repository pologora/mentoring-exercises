import { Outlet, useNavigate } from 'react-router-dom';
import style from './Clients.module.css';

const ClientsLayout = () => {
  const navigation = useNavigate();
  return (
    <div className={`${style.clientsLayoutContainer}`}>
      <button onClick={() => navigation('/clients/add')} className={style.btn}>
        Add client
      </button>
      <Outlet context={{ hi: 'hello' }} />
    </div>
  );
};
export default ClientsLayout;
