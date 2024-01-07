import { Route, Routes } from 'react-router-dom';

import AddClient from './AddClient';
import Client from './Client';
import Clients from './Clients';
import ClientsLayout from './ClientsLayout';
import UpdateClient from './UpdateClient';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientsLayout />}>
        <Route index element={<Clients />} />
        <Route element={<Client />} path=':id' />
        <Route element={<AddClient />} path='add' />
        <Route element={<UpdateClient />} path=':id/edit' />
      </Route>
    </Routes>
  );
};
export default ClientsRoutes;
