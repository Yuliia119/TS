import type { JSX } from 'react';
import './myInput.css'

interface MyInputProps{
    name: string;
    type: string;
    placeholder: string;
    label: string;
}

function MyInput ({name, type, placeholder, label}:MyInputProps):JSX.Element{
return (
    <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} name={name} />
    </div>
)
}

export default MyInput