import {animalList} from '../data/animalList'

function DisplayList(){
    const region = animalList.reduce(
        (acc,animal)=> acc.includes(animal.region) ? acc: acc.concat(animal.region), []
    )

    return (
        <div>
            <ul>
                {animalList.map((animal)=> (
                    <li key ={animal.region}>{animal.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default DisplayList
