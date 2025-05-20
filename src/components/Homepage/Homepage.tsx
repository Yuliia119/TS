import {  NavLink } from "react-router-dom";
import { homework, lessons } from "../../routesConfig";


export default function Homepage() {
  return (
    <div style={{padding: '1rem'}}>
        
        <h2>Lessons</h2>
        <ul style={{listStyle: "none", paddingLeft: 0}}> 
            {lessons.map(({path, name}) =>(
            <li key={path}>
                <NavLink to={`/lessons/${path}`}>{name}</NavLink>
            </li> ))}
        </ul>
          
        <h2>Homeworks</h2>
        <ul style={{listStyle: "none", paddingLeft: 0}}> 
            {homework.map(({path, name}) =>(
            <li key={path}>
                <NavLink to={`/homework/${path}`}>{name}</NavLink>
            </li> ))}
        </ul>
    </div>
  )
}
