import { Formik } from 'formik';
import style from './MultiStepForm.module.css';
import invoiceValidationScheema, {
  InvoiceFormValues,
} from '../../yupValidationScheemas/invoiceValidationScheema';

const MultiStepForm = () => {
  console.log('hi');

  return (
    <div className={style.multiStepContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={invoiceValidationScheema}
      ></Formik>
    </div>
  );
};
export default MultiStepForm;
