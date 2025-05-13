export default function Lesson06(){
// * string
    let username:string = 'Pavel';
    username= 'Daria'

    console.log(username);

// *number
    let number:number= 42
    number= 4.33
    
    console.log(number);

// *boolen
     let isAdmin:boolean = true
     isAdmin= 10<2  // это false

     console.log(isAdmin);

// * null | undefined
    const nothing: undefined = undefined
    let empty: null=null

    console.log(nothing,empty);

// * union type (обьединение типов)
    let value: string|number =42
    value = 'my favorite number'+ 120

    console.log(value);

    // * type literals (литеральные, буквальные типы)

  let userRole:'ADMIN' | 'CLIENT' | 'GUEST' = 'ADMIN'
  userRole = 'CLIENT'

  console.log(userRole)

  // * arrays (массивы)(прописывается какой-то один тип в массиве)

  const colors:string[] = ['red', 'green', 'blue']
  colors.push('cyan')

  console.log(colors)

  // * tupel (кортеж)(прописываем все типы в массиве)
  // если не использовать ключевое слово readonly мы не ограничиваем такой массив от добавления новых элементов

  let person: [string, number] = ['John', 35]
  person.push('Johnson')

  console.log(person)

  let planet:readonly[string, boolean] = ['Earth', true]
  // planet.push(1000000) вызовет ошибку
  console.log(planet)

// funktions
// пример с числами
function sum(a:number, b:number){
    return a+b
} 
sum (34, 70)
// пример со строками
function makeString(a:number, b:number):string{
    return 'сумма:' +(a+b)
} 
console.log(makeString (34, 70))

// пример со строками и числами
const showMessage = (message: string |number):void =>{
console.log('massage:'+ message);
}

showMessage(33)

// * any
  // тип данных которой позволяет прописывать любые типы
  // использовать не рекомендуется или только в крайних случаях

  let someValue:any = 'whatever you want';
  someValue = 10
  someValue = undefined

  // ! ts-ignore | ts-nocheck
  // можно отключить проверку типов для одной строчки
  // но лучше так не делать по возможности 🫣
  // для конкретной строки либо всего файла

  // @ts-ignore
  colors.push(42)
    
    
     
    
    

    return(
        <div>
        <h1>Lesson 06: TypeScript pt1 💁‍♂️</h1>
        <p>Самое интересное на этом уроке происходит в теле функции и в командной строке</p>
        </div>
    )
}