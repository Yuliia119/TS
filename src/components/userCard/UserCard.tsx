import type { JSX } from 'react';
import style from './UserCard.module.css'
import cn from 'classnames'
// через деструктуризацию разделяем передаваемый из родительского компонента объект props с данными на переменные с таким же названием, как и у ключей в передаваемом объекте


interface IUserCardProps{
  name: string;
  age?: number;
  hobby?: string;
  className?: string;
}

function UserCard({name,age,hobby, className}:IUserCardProps):JSX.Element {
 
  
    return (
      <div className={cn(style.userCard, className)}>
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      <p>{hobby ? "Hobby: " + hobby : 'No hobby 🙅‍♂️'}</p>
      </div>
    );
  }
  
  export default UserCard;