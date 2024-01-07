import { FieldAttributes, useField } from 'formik';
import { Box, TextField } from '@mui/material';

type FormInputProps = {
  label: string;
} & FieldAttributes<{}>;

const FormInput = ({ label, ...props }: FormInputProps) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <TextField
        {...field}
        {...(props as any)}
        label={label}
        variant='outlined'
        margin='normal'
        fullWidth
        error={meta.touched && !!meta.error}
        helperText={meta.error}
      />
    </Box>
  );
};
export default FormInput;
