import MyButton from "../../components/myButton/MyButton";
import MyInput from "../../components/myInput/MyInput";

export default function Lesson07() {
  // ! типизация объектов

  // описание типа с помощью interface - он описывает все типы данных по ключам в объекте
  // такой тип записанный отдельно удобно переиспользовать с разными объектами
  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    age?: number;  // не обязательный ключ
  }

  // здесь мы создаем переменную hero1 с типом ISuperHero, описанным выше
  const hero1: ISuperHero = {
    id: 1,
    name: "Bruce Wayne",
    nickname: "Batman",
    superpowers: []
  };

  // на основании уже существующих interface можно создавать новые через ключевое слово extends
  interface ISpaceHero extends ISuperHero {
    homePlanet: 'Mars' | 'Saturn' | 'Crypton';
  }

  const hero2:ISpaceHero = {
    homePlanet: "Crypton",
    id: 2,
    name: "Clark Kent",
    nickname: "Superman",
    superpowers: ['super fly', 'super fly']
  }

  // ! пример типизации массива из объектов
  // пишите название интерфейса для объекта из которого состоит массив и квадратные скобки
  // это значит, что если нужно типизировать массив объектов - сначала типизируйте один объект из которого состоит этот массив

  const superArray:ISuperHero[] = [hero1, hero2, {id: 3, name: 'Tony Stark', nickname: 'Iron man',superpowers: ['super genius'] }]

  console.log('супергерои: ',superArray)

  // ! типизация через type
  // есть небольшие особенности в сравнении с interface
  // оба способа хороши и активно используются

  type User = {
    id: 1
    isAdmin: boolean
    name: string
  }

  type UserProfile = User & {
    info: string
  }

  const user1:UserProfile = {
    id: 1,
    isAdmin: true,
    name: "Nick Fury",
    info: 'Head of the Shield organization'
  }

  console.log(user1)




  return (
    <div>
      <h1>Lesson 07: TypeScript pt2 💁</h1>
      <p>Самое интересное на этом уроке происходит в теле функции и в командной строке</p>
      
      <MyInput name={"search"} type={"search"} placeholder={"Введите текст"} label={"Поиск:"}/>
      <MyButton/>
    </div>
  );
}