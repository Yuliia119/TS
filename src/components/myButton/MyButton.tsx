import type { JSX } from 'react';
import './MyButton.css'

interface IMyButtonProps{
  text?: string;
  type?: 'button'| 'submit'|'reset' ;
  func?: ()=> void;
}

function MyButton({ text = 'Click me..', type = 'button', func = () => console.log('click!') }:IMyButtonProps):JSX.Element {
    return <button onClick={func} type={type} className="my-button">{text}</button>;
  }
export default MyButton;