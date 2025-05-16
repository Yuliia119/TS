import { fellowship } from '../../lessons/lesson05/fellowship'
import HeroCard from './HeroCard'
import './homework05.css'

function Homework05(){
return (
    <div>
        <h1>Homework 05: React map() 🧝🏻‍♂️</h1>
      {fellowship.map(hero => (
        <HeroCard key={hero.id} name={hero.name} age={hero.age} isDark={hero.isDark} image={hero.image}/>
      ))}
      </div>
)
}
export default Homework05