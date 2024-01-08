import { Box, TextField } from '@mui/material';
import { Field, FieldAttributes, useField } from 'formik';

type FormInputProps = {
  label: string;
} & FieldAttributes<object>;

const FormInput = ({ label, ...props }: FormInputProps) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <Field
        as={TextField}
        {...field}
        {...props}
        fullWidth
        error={meta.touched && !!meta.error}
        helperText={meta.error}
        label={label}
        margin='normal'
      />
    </Box>
  );
};
export default FormInput;
