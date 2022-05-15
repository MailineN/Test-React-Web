import {animalList} from '../data/animalList'
import DisplayListStyle from '../styles/DisplayListStyle.css'
import ClickAction from "./ClickAction";

function handleClickAlert(animalName){
    alert('Ceci est un ' +animalName + '')
}
function DisplayList(){
    return (
        <div>
            <ul>
                {animalList.map((animal)=> (
                    <li key ={animal.name} className={'animal-cover-item'} onClick={() =>handleClickAlert(animal.name)}>
                        {animal.name}
                        <ul>
                            <li key = {animal.region} className={'animal-cover'}>
                                {"Region : "}{animal.region}{animal.region === "Asia" ? <span> 🎋 </span>: <span> 🏞 </span>}
                            </li>
                            <li key = {animal.weight} className={'animal-cover'}>
                                {"Weight : "}{animal.weight}{" kg"}
                                {animal.weight > 150 ? <span> - It's very heavy!</span>:<span> - It's pretty light!</span>}
                            </li>
                        </ul>
                    </li>

                ))}
            </ul>


        </div>
    )
}

export default DisplayList
