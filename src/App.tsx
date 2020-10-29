import React, {useState} from "react";
import UniversalButton from "./components/universalButton/UniversalButton";
import Tablo from "./components/InputCounter/Tablo";
import './App.css'
import InputNumber from "./components/inputNumber/inputNumber";

function App() {

    let [startValue, setStartValue] = useState(0)
    let [count, setCount] = useState(startValue)
    let [maxValue, setMaxValue] = useState(0)
    const [error, setError] = useState<string | null>(null)


    function inc() {
        if (count < maxValue) {
            setCount(count+1)
        }
    }

    const reset = () => setCount(startValue)

    return (
        <div className='App'>
            <header>
                <InputNumber maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             setCount={setCount}
                             count={count}
                             error={error}
                             setError={setError}/>
            </header>
            <footer className='footer'>
                <Tablo count={count}
                       maxValue={maxValue}/>
                <UniversalButton inc={inc} reset={reset} count={count} maxValue={maxValue} startValue={startValue}/>
            </footer>
        </div>
    )
}

export default App