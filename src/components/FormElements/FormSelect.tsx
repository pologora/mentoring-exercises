import { FieldAttributes, useField } from 'formik';
import style from './FormStyle.module.css';
import { ReactNode } from 'react';

type FormSelectProps = {
  label: string;
  children: ReactNode;
} & FieldAttributes<{}>;

const FormSelect = ({ label, children, ...props }: FormSelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div className={style.inputContainer}>
      <label className={style.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <select {...field} {...(props as any)}>
        {children}
      </select>
      {meta.touched && meta.error ? (
        <p className={style.inputError}>{meta.error}</p>
      ) : null}
    </div>
  );
};

export default FormSelect;
