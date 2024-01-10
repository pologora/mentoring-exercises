import { useEffect } from 'react';
import { MenuItem } from '@mui/material';
import { useFormikContext } from 'formik';

import { useGetAllClients } from '../../Api/clientsService';
import { FormikStepProps } from '../../types/customInterfaces';
import FormSelect from '../FormElements/FormSelect';

import ClientInfo from './ClientInfo';
import { initialValues, type MultiFormValuesType } from './MultiFormInitialValues';

const Step1 = ({ label }: FormikStepProps) => {
  const { setValues, values } = useFormikContext<MultiFormValuesType>();
  const { data, error, isError, isLoading } = useGetAllClients();
  const clientId = values.client.id;

  const client = data?.data.find((item) => item.id === clientId);

  const selectOptions = data?.data.map((client) => {
    return (
      <MenuItem key={client.id} value={client.id}>
        {client.name} {client.surname}
      </MenuItem>
    );
  });

  useEffect(() => {
    if (client) {
      setValues(() => ({ ...initialValues, client }));
    }
  }, [clientId, client, setValues]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>{label}</h2>
      {client && <ClientInfo client={client} />}
      <FormSelect id='id' label='Wybierz klienta' name='client.id'>
        {selectOptions}
      </FormSelect>
    </div>
  );
};
export default Step1;
