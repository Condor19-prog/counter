import React, {useState} from "react";
import UniversalButton from "./components/universalButton/UniversalButton";
import Tablo from "./components/InputCounter/Tablo";
import './App.css'

function App() {
    let [count, setCount] = useState(0)

    const inc = () => setCount(count + 1)
    const reset = () => setCount(0)

    return (
        <div className='App'>
            <header>

            </header>
            <footer className='footer'>
                <Tablo count={count}/>
                <UniversalButton title={'inc'} inc={inc} reset={reset} count={count}/>
            </footer>
        </div>
    )
}

export default App