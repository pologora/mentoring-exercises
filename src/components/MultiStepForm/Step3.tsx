import { MenuItem } from '@mui/material';
import { useFormikContext } from 'formik';

import { MONTH_LIST } from '../../constants/constants';
import { FormikStepProps } from '../../types/customInterfaces';
import FormInput from '../FormElements/FormInput';
import FormSelect from '../FormElements/FormSelect';
import ClientInfo from './ClientInfo';
import { MultiFormValuesType } from './MultiFormInitialValues';
import OrdersList from './OrdersList';

const Step3 = ({ label }: FormikStepProps) => {
  const { values } = useFormikContext<MultiFormValuesType>();
  const { client, orders } = values;

  const monthsOptions = MONTH_LIST.map((month) => (
    <MenuItem key={month} value={month}>
      {month}
    </MenuItem>
  ));

  return (
    <div>
      <h2>{label}</h2>
      <ClientInfo client={client} />
      <OrdersList isRemovable={false} orders={orders} />
      <p>Date: {new Date().toLocaleString()}</p>
      <FormInput id='price' label='Price' name='price' />
      <FormSelect id='month' label='Month' name='month'>
        {monthsOptions}
      </FormSelect>
    </div>
  );
};
export default Step3;
