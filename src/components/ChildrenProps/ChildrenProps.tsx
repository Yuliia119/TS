import type { JSX } from "react";
import styles from './childrenProps.module.css'
import MyButton from "../myButton/MyButton";


interface IChildrenPropsProps {
  children: React.ReactNode;
  func: () => void
}

export default function ChildrenProps({ children, func }: IChildrenPropsProps): JSX.Element {
  return (
    <div className={styles.card}>
      {children}
      <MyButton variant="danger" text="на этой кнопке могут быть разные функции..." func={func} />
    </div>
  );
}
