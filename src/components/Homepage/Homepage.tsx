import {  NavLink } from "react-router-dom";
import { homework, lessons } from "../../routesConfig";
import styles from './homepage.module.css'



export default function Homepage() {
  return (
    <div >
      <h2>Lessons</h2>
      <div className={styles.containerGrid}>
            {lessons.map(({path, name}) =>(
            <NavLink key={path} to={`/lessons/${path}`}>
             <section>{name}</section>
            </NavLink> ))}
        </div>
          
        <h2>Homeworks</h2>
         <div className={styles.containerGrid}>
            {homework.map(({path, name}) =>(
            <NavLink key={path} to={`/homework/${path}`}>
             <section>{name}</section>
            </NavLink> ))}
        </div>
    </div>
    )
}

