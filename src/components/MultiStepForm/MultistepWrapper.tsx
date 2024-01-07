import { useMutation } from '@tanstack/react-query';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

import { createInvoice } from '../../Api/invoicesService';
import { useNotificationContext } from '../../contexts/NotificationContext';
import { NotificationBgColor } from '../../enums/NotificationBgColor';
import {
  step1Schema,
  step2Schema,
  step3Schema,
} from '../../yupValidationScheemas/formStepsValidationShema';
import NotificationAlert from '../NotificationAlert/NotificationAlert';
import { initialValues, MultiFormValuesType } from './MultiFormInitialValues';
import MultiStepForm from './MultiStepForm';
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
    onSuccess: () => {
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

  return (
    <>
      <NotificationAlert />
      <MultiStepForm initialValues={initialValues} onSubmit={handleSubmit}>
        <Step1 label='Step1' validationSchema={step1Schema} />
        <Step2 label='Step2' validationSchema={step2Schema} />
        <Step3 label='Step3' validationSchema={step3Schema} />
      </MultiStepForm>
    </>
  );
};
export default MultistepWrapper;
