import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const OrdersLayout = () => {
  const [state] = useState([{ title: 'order1', id: 123 }]);
  return (
    <div>
      <ul>
        <li>
          <Link to='/orders/add'>Add</Link>
        </li>
        <li>
          <Link to='/orders/1'>id 1</Link>
        </li>
        <li>
          <Link to='/orders/2'>id 2</Link>
        </li>
        <li>
          <Link to='/orders'>Orders home</Link>
        </li>
      </ul>
      <Outlet context={state} />
    </div>
  );
};
export default OrdersLayout;
