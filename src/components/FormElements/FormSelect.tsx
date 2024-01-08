import { ReactNode } from 'react';
import { Box, TextField } from '@mui/material';
import { Field, FieldAttributes, useField } from 'formik';

type FormSelectProps = {
  label: string;
  children: ReactNode;
} & FieldAttributes<object>;

const FormSelect = ({ children, label, ...props }: FormSelectProps) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <Field
        select
        as={TextField}
        {...field}
        {...props}
        fullWidth
        defaultValue=''
        error={meta.touched && !!meta.error}
        helperText={meta.error}
        label={label}
      >
        {children}
      </Field>
    </Box>
  );
};

export default FormSelect;
