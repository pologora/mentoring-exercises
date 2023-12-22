import { Route, Routes } from 'react-router-dom';
import Clients from './Clients';
import Client from './Client';
import AddClient from './ClientManagement';
import ClientsLayout from './ClientsLayout';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientsLayout />}>
        <Route index element={<Clients />}></Route>
        <Route path=':id' element={<Client />}></Route>
        <Route path='add' element={<AddClient />}></Route>
        <Route path=':id/edit' element={<AddClient />}></Route>
      </Route>
    </Routes>
  );
};
export default ClientsRoutes;
