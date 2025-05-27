import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './limitForm.module.css'

interface Props{
    onSubmit: (limit: number) => void
}

const schema = Yup.object().shape({       //схема проверки
  limit: Yup.number()
  .typeError('Limit must be a number')
  .min(1, 'Limit must be greater than 1') 
  .max(20, 'Limit must be less than 20')
  .required('Limit is required'),  
}) 

export default function LimitForm({onSubmit}: Props) {
    const formik = useFormik({          // проверка формы  (Formik + Yup)
      initialValues: {
        limit: 5,
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit:(values) => {
        onSubmit(values.limit)
      },
    })
    
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <label htmlFor="limit" className={styles.inputLabel}>How many products to show:</label>
            <input className={styles.inputField} id="limit" name='limit' type='text' value={formik.values.limit} onChange={formik.handleChange} />
            <button className={styles.submitButton} type='submit'>Load</button>
            {formik.touched.limit && formik.errors.limit && (
              <p className={styles.errorMessage}>{formik.errors.limit}</p>
            )}
    </form>
  )
}
