import MyButton from '../myButton/MyButton';
import MyInput from '../myInput/MyInput';
import './LoginForm.css'

function LoginForm (){
    return (
        <div className='loginForm'>
            <MyInput name ='login' type='text' label='login' placeholder='Введите текст'/>
            <MyInput name= 'email' type='email' label='email' placeholder='Введите текст'/>
            <MyInput name='password' type='password' label='password' placeholder='Введите текст'/>
            <MyButton type='submit'/>
        </div>
    )
}
export default LoginForm