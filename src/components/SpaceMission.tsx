export default function SpaceMission(){
const shipName: string ='Apollo 11'
const crewCount: number = 3
//const missionStarted: boolean = true
const crewNames: string[] = ['Нил Армстронг', 'Майкл Коллинз', 'Базз Олдрин']
//const captain:[string, number] = ['Майкл Коллинз', 35]
const startMission = (name:string):string =>{
    return `mission ${name} start`} 

return(
<div>
    <h2>Apollo 11</h2>
    <p>{crewCount}</p>
    <ul>
        {crewNames.map ( (name, index)=> (
            <li key={index}>{name}</li>
        ))}
    </ul>
    <p>{startMission(shipName)}</p>
</div>
)
}
