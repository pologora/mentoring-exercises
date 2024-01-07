import { Outlet } from 'react-router-dom';

import style from './Clients.module.css';

const ClientsLayout = () => {
  return (
    <div className={`${style.clientsLayoutContainer}`}>
      <Outlet context={{ hi: 'hello' }} />
    </div>
  );
};
export default ClientsLayout;
