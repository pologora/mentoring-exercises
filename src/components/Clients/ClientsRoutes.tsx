import { Route, Routes } from 'react-router-dom';
import Clients from './Clients';
import Client from './Client';
import UpdateClient from './UpdateClient';
import ClientsLayout from './ClientsLayout';
import AddClient from './AddClient';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientsLayout />}>
        <Route index element={<Clients />}></Route>
        <Route path=':id' element={<Client />}></Route>
        <Route path='add' element={<AddClient />}></Route>
        <Route path=':id/edit' element={<UpdateClient />}></Route>
      </Route>
    </Routes>
  );
};
export default ClientsRoutes;
