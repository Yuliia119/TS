import type { JSX } from 'react';
import styles from './myInput.module.css'
import cn from 'classnames'

interface MyInputProps{
    name: string;
    type: string;
    placeholder: string;
    label: string;
    className?: string;
}

function MyInput ({name, type, placeholder, label, className}:MyInputProps):JSX.Element{

    return (
    <div>
        <label className={styles.label}>{label}</label>
        <input
        className={cn(styles.input, className)}
        type={type} 
        placeholder={placeholder} 
        name={name} />
    </div>
)
}

export default MyInput