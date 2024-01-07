import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useGetAllInvoices } from '../../Api/invoicesService';
import InvoicesList from './InvoicesList';

const Invoices = () => {
  const { data, error, isError, isLoading } = useGetAllInvoices();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Button fullWidth size='large' variant='contained' onClick={() => navigate('/invoices/add')}>
        Add Invoice
      </Button>
      {data?.data && <InvoicesList invoices={data?.data} />}
    </div>
  );
};
export default Invoices;
