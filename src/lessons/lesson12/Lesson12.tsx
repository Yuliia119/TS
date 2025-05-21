import { useFormik } from "formik"
import MyButton from "../../components/myButton/MyButton"
import styles from './lesson12.module.css'


interface IFormValues {
  firstname: string,
  lastname: string,
  email: string
}

export default function Lesson12() {

    // * объект с настройками формы
    const formik = useFormik({
      // начальные значения для input
      initialValues: {
        firstname: 'john',
        lastname: 'doe',
        email: 'noreply@john.doe'
      } as IFormValues,
      // функция, которая сработает при отправке формы
      onSubmit: (values: IFormValues) => {
        console.log(values)
      }
    })


  return (
    <div className="lesson-container">
      <h1>Lesson 12: formik 💁‍♂️</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} name="firstname" type="text" placeholder="firstname" value={formik.values.firstname} />
        <input onChange={formik.handleChange} name="lastname" type="text" placeholder="lastname" value={formik.values.lastname} />
        <input onChange={formik.handleChange} name="email" type="email" placeholder="email" value={formik.values.email} />
        <MyButton type="submit" text="send data" />
      </form>
      <h2>Что нужно не забыть, чтобы форма заработала:</h2>
      <ul className={styles.ul}>
        <li>Установить formik через 'npm i formik'</li>
        <li>Создать типы под будущие значения input</li>
        <li>Создать объект formik с помощью функции useFormik с настройками</li>
        <li>В initialValues присвоили начальные значения формы</li>
        <li>В onSubmit описываем действие по отправке формы</li>
      </ul>
    </div>
  );
}