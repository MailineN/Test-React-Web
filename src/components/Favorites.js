import {useState} from "react"
import '../styles/Favorites.css'
import Button from '@material-ui/core/Button';

function Favorites(){
    const[fav,updateFav] = useState(0)
    return(
        <div className='favorites'>
            <h2> Counter </h2>
            <div>
                <i>Add 1 element to counter </i> <br/> <br/>
                <Button variant="contained" className='favButton' onClick={()=> updateFav(fav+1)}> Add 1 </Button>
                <Button variant="outlined" className='favButton' onClick={()=> updateFav(0)}> Reset to 0 </Button>
            </div>
            <h3>Total : {fav}</h3>
        </div>
    )
}
export default Favorites
