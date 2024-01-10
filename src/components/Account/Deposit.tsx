import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';

import { deposit } from '../../redux/moneySlice';
import { schemaDeposit } from '../../yupValidationScheemas/modifyBalanceShema';
import FormInput from '../FormElements/FormInput';

import style from './Account.module.css';

const initialValues = {
  amount: 0,
};

const Deposit = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.depositForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaDeposit}
        onSubmit={(values, helpers) => {
          dispatch(deposit(Number(values.amount)));
          helpers.resetForm();
        }}
      >
        <Form>
          <FormInput label='Deposit' name='amount' placeholder='Write a deposit amount' />
          <Button color='primary' type='submit' variant='contained'>
            Deposit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default Deposit;
