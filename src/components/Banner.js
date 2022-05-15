import '../styles/Banner.css';
import seahorse from '../assets/seahorse.png'
function Banner(){
    return <div className='banner'>
        <img src={seahorse} alt='Seahorse' className='bannerLogo' width="100"/>
        <h1>Pink seahorse by Panda 🐼</h1>
    </div>
}

export default Banner
