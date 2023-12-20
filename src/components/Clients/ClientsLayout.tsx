import { Link, Outlet } from 'react-router-dom';

const ClientsLayout = () => {
  return (
    <>
      {' '}
      <Link to='/clients/1'>Client 1</Link>
      <br />
      <Link to='/clients/2'>Clietn 2</Link>
      <br />
      <Link to='/clients/2/edit'>Edit Client 2</Link>
      <br />
      <Link to='/clients/add'>Add client</Link>
      <Outlet context={{ hi: 'hello' }} />
    </>
  );
};
export default ClientsLayout;
