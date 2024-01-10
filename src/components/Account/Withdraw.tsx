import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';

import { withdraw } from '../../redux/moneySlice';
import { schemaWithdraw } from '../../yupValidationScheemas/modifyBalanceShema';
import FormInput from '../FormElements/FormInput';

import style from './Account.module.css';

const initialValues = {
  amount: 0,
};

const Withdraw = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.withdrawForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaWithdraw}
        onSubmit={(values, helpers) => {
          dispatch(withdraw(Number(values.amount)));
          helpers.resetForm();
        }}
      >
        <Form>
          <FormInput label='Withdraw' name='amount' placeholder='Write a withdraw amount' />
          <Button color='error' type='submit' variant='contained'>
            Withdraw
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default Withdraw;
