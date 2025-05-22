import { useFormik } from "formik";
import * as Yup from 'yup'
import MyButton from "../myButton/MyButton";
import styles from './registerSchema.module.css'

interface IFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// главная часть проверки (валидации) 
//описание проверок по ключам в объекте schema
const schema = Yup.object().shape({
  username: Yup
    .string()
    .min(3, 'Too short')
    .max(20, 'Too long')
    .required('username is required')
    .matches(/^[a-zA-Z0-9_]+$/),
  email: Yup
    .string()
    .required('email is required')
    .email('incorrect email format'),
   password: Yup
    .string()
    .required('password is required')
    .min(8, 'Too short')
    .max(32, 'Too long')
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/\d/)
    .matches(/[@$!%*?&]/),
   confirmPassword: Yup.string()
   .oneOf([Yup.ref("password")], 'Passwords must match')
   .required('Password confirmation is required') 
});

export default function RegisterSchema() {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    } as IFormData,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormData) => {
      console.log(values);
    }
  });


   return (
    <div className="lesson-container">
      <h1>Registation</h1>
      <form onSubmit={formik.handleSubmit} className={styles.registerForm}>
        <input value={formik.values.username} name="username" onChange={formik.handleChange} type="text" placeholder="username" />
        <input value={formik.values.email} name="email" onChange={formik.handleChange} type="text" placeholder="company email" />
        <input value={formik.values.password} name="password" onChange={formik.handleChange} type="text" placeholder="password" />
        <input value={formik.values.confirmPassword} name="confirmPassword" onChange={formik.handleChange} type="text" placeholder="confirmPassword" />
        <MyButton type="submit" text="Send"/>
      </form>
      <span className={styles.errorMessage}>{formik.errors.username}</span>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
      <span className={styles.errorMessage}>{formik.errors.password}</span>
      <span className={styles.errorMessage}>{formik.errors.confirmPassword}</span>
    </div>
  );
}


