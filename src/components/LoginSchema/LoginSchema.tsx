import { useFormik } from "formik";
import * as Yup from 'yup'
import MyButton from "../myButton/MyButton";
import styles from './loginSchema.module.css'

interface IFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .required('email is required')
    .email('incorrect email format'),
   password: Yup
    .string()
    .required('password is required')
    .min(8, 'Too short'),
});

export default function LoginSchema() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as IFormData,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormData) => {
      console.log(values);
    }
  });


   return (
    <div className="lesson-container">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <input value={formik.values.email} name="email" onChange={formik.handleChange} type="text" placeholder="company email" />
        <input value={formik.values.password} name="password" onChange={formik.handleChange} type="text" placeholder="password" />
        <MyButton type="submit" text="Send"/>
      </form>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
      <span className={styles.errorMessage}>{formik.errors.password}</span>
    </div>
  );
}



