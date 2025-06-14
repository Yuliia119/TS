import type { JSX } from 'react';
import styles from './myInput.module.css'
import cn from 'classnames'
import type { FormikProps } from 'formik';

interface MyInputProps{
    name: string;
    type: 'password' | 'email' | 'number' | 'text';
    placeholder: string;
    label: string;
    className?: string;
    formik: FormikProps<any>
}

function MyInput ({name, type, placeholder, label, className, formik}:MyInputProps):JSX.Element{
 const { errors } = formik;
    return (
    <div>
        <div>
        {errors[name] ? <label style={{color: 'red'}}>{errors[name] as string}</label> : label}
      </div>
        <input
        value={formik.values[name]} 
        onChange={formik.handleChange}
        className={cn(styles.input, className)}
        type={type} 
        placeholder={placeholder} 
        name={name} 
        />
    </div>
)
}

export default MyInput