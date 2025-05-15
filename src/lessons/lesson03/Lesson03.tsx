import type { JSX } from 'react';
import MyButton from '../../components/myButton/MyButton'
import MyInput from '../../components/myInput/MyInput';
import UserCard from '../../components/userCard/UserCard'

function Lesson03():JSX.Element {


  const friends: ({
    name: string;
    age: number;
    hobby: string;
} | {
    name: string;
    age: string;
    hobby: string;
})[] = [
    { name: 'Peter', age: 40, hobby: 'coding' },
    { name: 'Rosa', age: 35, hobby: 'hiking' },
    { name: "Anton", age: "20", hobby: "painting" }
  ];

  // функция для передачи в компонент кнопки
  const go = ():void => console.log('go!');

  return (
    <div>
      <h1>Lesson 3: react props 👨‍👩‍👧‍👦</h1>
      {/* передаем анонимную стрелочную функцию как пропс func */}
      <MyButton func={() => console.log('push!')} text="Нажми меня" />
      {/* передаем функцию именную функцию go  */}
      <MyButton text="Go!" func={go} />
      <MyButton />
      <MyInput name='Olga' type= 'text' placeholder= 'Введите текст' label= 'Olga'/>
    
      <UserCard name={friends[0].name} hobby={friends[0].hobby}/>
      <UserCard name="Rosa" age={35}/>
      <UserCard name="Anton" age={20} hobby="painting"/>

        </div>
    )
}
export default Lesson03