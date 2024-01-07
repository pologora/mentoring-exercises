import { Route, Routes } from 'react-router-dom';

import AddInvoice from './AddInvoice';
import InvoiceDetail from './InvoiceDetail';
import Invoices from './Invoices';
import InvoicesLayout from './InvoicesLayout';

const InvoicesRoutes = () => {
  return (
    <Routes>
      <Route element={<InvoicesLayout />}>
        <Route index element={<Invoices />} />
        <Route element={<AddInvoice />} path='add' />
        <Route element={<InvoiceDetail />} path=':id' />
      </Route>
    </Routes>
  );
};
export default InvoicesRoutes;
