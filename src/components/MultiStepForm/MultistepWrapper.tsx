import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { FormikHelpers } from 'formik';

import { createInvoice } from '../../Api/invoicesService';
import { markOrderAsPaided } from '../../Api/ordersService';
import { useNotificationContext } from '../../contexts/NotificationContext';
import { NotificationBgColor } from '../../enums/NotificationBgColor';
import { TInvoice } from '../../types/customTypes';
import {
  step1Schema,
  step2Schema,
  step3Schema,
} from '../../yupValidationScheemas/formStepsValidationShema';
import NotificationAlert from '../NotificationAlert/NotificationAlert';

import { initialValues, MultiFormValuesType } from './MultiFormInitialValues';
import { MultiSteperForm } from './MultiStepForm';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultistepWrapper = () => {
  const dateNow = new Date().toLocaleString();
  const { handleChangeNotification } = useNotificationContext();
  const navigate = useNavigate();

  const invoiceMutation = useMutation({
    mutationFn: (values: MultiFormValuesType) => {
      return createInvoice(values);
    },
    onError: () => {
      handleChangeNotification(
        'Faktura nie została dodana, coś poszło nie tak',
        NotificationBgColor.error,
      );
    },
    onSuccess: async (values: AxiosResponse<TInvoice>) => {
      const promises = values.data.orders.map(async (order) => {
        return markOrderAsPaided(order.id);
      });
      await Promise.all(promises);

      handleChangeNotification('Faktura została dodana', NotificationBgColor.success);
      navigate('/invoices');
    },
  });

  const handleSubmit = (
    values: MultiFormValuesType,
    helpers: FormikHelpers<MultiFormValuesType>,
  ) => {
    helpers.setFieldValue('date', dateNow);
    invoiceMutation.mutate(values);
    helpers.resetForm();
  };

  /*
  steps={
        [
           <Step1 label='Step1' validationSchema={step1Schema} />,
            <Step2 label='Step2' validationSchema={step2Schema} />,
            <Step3 label='Step3' validationSchema={step3Schema} />
        ]
      }
  */
  return (
    <>
      <NotificationAlert />
      <MultiSteperForm initialValues={initialValues} onSubmit={handleSubmit}>
        <Step1 label='Step1' validationSchema={step1Schema} />
        <Step2 label='Step2' validationSchema={step2Schema} />
        <Step3 label='Step3' validationSchema={step3Schema} />
      </MultiSteperForm>
    </>
  );
};
export default MultistepWrapper;
