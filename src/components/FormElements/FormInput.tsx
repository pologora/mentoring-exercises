import { FieldAttributes, useField } from 'formik';
import style from './FormStyle.module.css';

type FormInputProps = {
  label: string;
} & FieldAttributes<{}>;

const FormInput = ({ label, ...props }: FormInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className={style.inputContainer}>
      <label className={style.label} htmlFor={props?.id || props?.name}>
        {label}
      </label>
      <input className={style.input} {...field} {...(props as any)} />
      {meta.touched && meta.error ? (
        <p className={style.inputError}>{meta.error}</p>
      ) : null}
    </div>
  );
};
export default FormInput;
