import React, {ChangeEvent} from "react";
import {Button} from "@material-ui/core";
import s from '../inputNumber/inputNumber.module.css'


type inputNumberPropsType = {
    maxValue: string
    startValue: string
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCount: (value: number) => void
    count: number
    error: string | null
    setError: (value: string | null) => void
}

function InputNumber(props: inputNumberPropsType) {

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("minValue", e.currentTarget.value)
        props.setStartValue(e.currentTarget.valueAsNumber)
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("maxValue", e.currentTarget.value)
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }

    const setButton = () => props.setCount(+props.startValue)

    if (+props.startValue < 0) {
        props.setError("Min value не должно быть меньше 0")
    }
    // else if (+props.maxValue === 0) {
    //     props.setError("Введите значение !")
    // }
    else if (+props.startValue > +props.maxValue) {
        props.setError("Min value не должен быть больше Max value")
    } else {
        props.setError(null)
    }

    const disabledButtonSet = () => {
        if (props.error) {
            return true
        }
    }

    return (
        <div className={s.block}>
            max:<input type='number' onChange={changeMaxValue} value={props.maxValue}/><br/>
            min:<input className={s.i} onChange={changeMinValue} value={props.startValue} type='number'/><br/>
            <Button variant='contained' onClick={setButton} disabled={disabledButtonSet()}>SET</Button><br/>
            <span style={{color: "red"}}>{props.error}</span>
        </div>
    )
}

export default InputNumber