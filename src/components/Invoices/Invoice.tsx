import { TInvoice } from '../../types/customTypes';
import style from './Invoices.module.css';

type InvoiceType = {
  invoice: TInvoice;
};

const Invoice = ({ invoice }: InvoiceType) => {
  const { client, date, id, month, price } = invoice;
  const formatedDate = new Date(date).toLocaleString();
  return (
    <div className={style.invoicesListItem}>
      <h2>Invoice nr: {id}</h2>
      <h3>
        {client.name} {client.surname}
      </h3>
      <p>Data wystawienia FV: {formatedDate}</p>
      <p>Termin płatności: {month}</p>
      <p>Cena: {price}</p>
    </div>
  );
};
export default Invoice;
