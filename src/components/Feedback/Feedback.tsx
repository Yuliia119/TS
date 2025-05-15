import { useState, type JSX } from 'react'
import MyButton from '../myButton/MyButton'

function Feedback ():JSX.Element{
    const [count, setCount] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)
    
    
      const handlePlus = ():void => {
       setCount(prev => prev + 1)
     }
     const handlePlus2 = ():void => {
        setCount2(prev => prev + 1)
      }

     const handleReset = ():void => {
       setCount(0)
       setCount2(0)
     }
    
    
    return (
        <div>
            <h1>Feedback</h1>
            <span> {count} </span>
            <MyButton text='Like' type='button' func={handlePlus}/>
            <MyButton text='Dislike' type='button' func={handlePlus2}/>
            <span> {count2} </span>
            <MyButton text='Reset Results' type='button' func={handleReset}/>

        </div>
    )
}
export default Feedback