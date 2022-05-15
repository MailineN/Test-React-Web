
function ClickAction(animalName){
    return(
        <div>
            onClick{()=>
            alert('Ceci est un ${animalName}')
        }
        </div>
    )
}

export default ClickAction;
