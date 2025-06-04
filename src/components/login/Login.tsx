import  { type JSX } from "react";
import style from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAction } from "../../features/auth/authAction";
import { useNavigate } from "react-router-dom";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
  .required("Username is required"),
  password: Yup.string()
  .min(8, "Password must be at least 8 characters long")
  .required("Password is required"),
});

export default function Login(): JSX.Element {
  const {error} = useAppSelector(store => store.user)
    // готовим dispatch для передачи action в redux
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      username: "oliviaw",
      password: "oliviawpass",
    } as { username: string; password: string },
    validateOnChange: false,
    // добавляем валидацию в форму
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {

      // ! отправляем данные в redux и проверяем полученные данные
      const user = await dispatch(loginAction(values)).unwrap();

      // ! если данные пришли перемещаемся на главную страницу
      if (user) {
        navigate('/');
      }
      
      resetForm();
    }
  });

  return (
    <div>
      <h2>Login 🔐</h2>
      <form onSubmit={formik.handleSubmit} className={style.formStyle}>
        <MyInput name={"username"} label={"Type your username 🙋‍♀️"} placeholder={"username"} type={"text"} formik={formik} />
        <MyInput name={"password"} label={"Type your password 🤷‍♂️"} placeholder={"password"} type={"password"} formik={formik} />
        <MyButton text="sign in" type="submit"/>
      </form>
       {error && <span style={{color: 'red'}}>{error === 'Request failed with status code 400' ? 'Mistake in username or pass 🤖' : error === 'Request failed with status code 404' ? 'Request not found 404 🙃' : ''}</span>}
    </div>
  );
}
