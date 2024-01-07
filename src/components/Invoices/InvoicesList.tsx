import { TInvoice } from '../../types/customTypes';
import Invoice from './Invoice';
import style from './Invoices.module.css';

type InvoicesListType = {
  invoices: TInvoice[];
};

const InvoicesList = ({ invoices }: InvoicesListType) => {
  const renderedList = invoices.map((invoice) => <Invoice key={invoice.id} invoice={invoice} />);
  return <div className={style.invoicesList}>{renderedList}</div>;
};
export default InvoicesList;
