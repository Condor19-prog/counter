import React, {useEffect, useState} from "react";
import UniversalButton from "./components/universalButton/UniversalButton";
import Tablo from "./components/InputCounter/Tablo";
import './App.css'
import InputNumber from "./components/inputNumber/inputNumber";

function App() {

    let [startValue, setStartValue] = useState<any>(0)
    let [count, setCount] = useState<any>(0)
    let [maxValue, setMaxValue] = useState<any>(0)
    const [error, setError] = useState<string | null>(null)


    useEffect( ()=> {
        let min = localStorage.getItem("minValue")
        let max = localStorage.getItem("maxValue")
        setStartValue(min)
        setMaxValue(max)
    }, [] )


    function inc() {
        if (count < maxValue) {
            setCount(count+1)
        }
    }

    const reset = () => setCount(+startValue)

    return (
        <div className='App'>
            <header>
                <InputNumber maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             startValue={startValue}
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