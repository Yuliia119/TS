function HeroCard ({id,name,age,isDark,weapons,image}){
    return(
        <div  className={`hero-card ${isDark ? 'hero-card-dark' : 'hero-card-light'}`}>
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