import { FieldAttributes, useField } from 'formik';
import { Box, TextField } from '@mui/material';
import { ReactNode } from 'react';

type FormInputProps = {
  children: ReactNode;
} & FieldAttributes<{}>;

const FromCheckbox = ({ children, ...props }: FormInputProps) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <label className='checkbox-input'>
        <input type='checkbox' {...field} {...(props as any)} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </Box>
  );
};
export default FromCheckbox;
