type HeroCardProps = {
id:number;
name: string;
age: number;
isDark:boolean;
weapons: string[];
image: string;
} 

function HeroCard ({name,age,isDark,weapons,image}:HeroCardProps){
    return(
        <div  className={isDark ? 'hero-card-dark' : 'hero-card-light'}>
          <h3>{name}</h3>
          <p>{age} years old</p>
          <p>{isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
            <div className="weapons">
                <h4>Weapons:</h4>
                <ul>{weapons.map((weapon,index)=>(
                    <li key={index}>{weapon}</li>)
                )}</ul>
            </div>
            <div className="image-wrapper">
            <img src={image} alt={name} />
            </div>
          
        </div>
    )
}
export default HeroCard