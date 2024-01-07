import { FieldAttributes, useField } from 'formik';
import style from './FormStyle.module.css';
import { ReactNode } from 'react';
import { Box, TextField } from '@mui/material';

type FormSelectProps = {
  label: string;
  children: ReactNode;
} & FieldAttributes<{}>;

const FormSelect = ({ label, children, ...props }: FormSelectProps) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <TextField
        select
        {...field}
        {...(props as any)}
        defaultValue=''
        label={label}
        fullWidth
        error={meta.touched && !!meta.error}
        helperText={meta.error}
      >
        {children}
      </TextField>
    </Box>
  );
};

export default FormSelect;
