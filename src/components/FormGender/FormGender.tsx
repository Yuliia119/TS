import { useFormik } from "formik"
import { useState } from "react"
import MyButton from "../../components/myButton/MyButton"
import styles from './formGender.module.css'

// тип данных из формы
interface IFormValues { name: string}
// тип данных из API
interface IGenderData { 
    name: string 
    gender: string 
    probability: number 
    count: number}

export default function FormGender() { 
    const [genderData, setGenderData] = useState<IGenderData | null>(null)

    const formik = useFormik({
        initialValues: {name: ''} as IFormValues,
        onSubmit: async (values: IFormValues) => { 
            try {
            const response = await fetch(`https://api.genderize.io/?name=${values.name} `)
            const data = await response.json() 
            setGenderData(data) 
            } catch (error) {
            console.error("Ошибка при запросе:", error) 
        } 
    } 
})

return (
    <div className="lesson-container"> 
    <h1>FormGender: определение пола по имени</h1> 
    <form onSubmit={formik.handleSubmit} className={styles.form}> 
        <input
        onChange={formik.handleChange}
        name="name"
        type="text"
        placeholder="Введите имя"
        value={formik.values.name}/>
        <MyButton type="submit" text="Узнать пол" /> 
    </form>
    {genderData && (
        <div className={styles.result}>
        <h2>Результат:</h2>
        <p>Имя: {genderData.name}</p>
        <p>Пол: {genderData.gender}</p> 
        <p>Вероятность: {Math.round(genderData.probability * 100)}%</p> 
        <p>Количество примеров: {genderData.count}</p>
        </div>
    )}
    </div> 
)}