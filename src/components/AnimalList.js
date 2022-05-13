const animalList = [
    'Panda',
    'Bear',
    'Red-panda',
    'Lynx'
]

function AnimalList(){
    return (
        <ul>
            {animalList.map((animal,index) => (
            <li key={`${animal}-${index}`}>{animal}</li>
            ))}
        </ul>
    )
}

export default AnimalList
