import { useState } from 'react'
import '../styles/Foot.css'

function Foot() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Le panda n'est pas content, il n'y a pas votre mail")
        }
    }

    return (
        <footer className='footer'>
            <div className='footer-elem'>
                Catalogue non exhaustif d'animaux en tout genre 🐻‍❄️
            </div>
            <div className='footer-elem'>😑 😑 😑 </div>
            <input className='footer-form-elem'
                placeholder='Un commentaire + votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Foot
