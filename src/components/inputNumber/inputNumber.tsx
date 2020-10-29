import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import s from '../inputNumber/inputNumber.module.css'


type inputNumberPropsType = {
    maxValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCount: (value: number) => void
    count: number
    error: string | null
    setError: (value: string) => void
}

function InputNumber(props: inputNumberPropsType) {
    const [localMinValue, setLocalMinValue] = useState<number>(0)
    const [localMaxValue, setLocalMaxValue] = useState<number>(0)

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => setLocalMinValue(+e.currentTarget.value)
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => setLocalMaxValue(+e.currentTarget.value)

    const setButton = () => {
        props.setMaxValue(localMaxValue)
        props.setCount(localMinValue)
        props.setStartValue(localMinValue)
    }
    const isError = useCallback(() => {
        if (localMinValue < 0) {
            props.setError("Min value не должно быть меньше 0")
        } else if (localMaxValue === 0) {
            props.setError("Введите значение !")
        } else if (localMinValue > localMaxValue) {
            props.setError("Min value не должен быть больше Max value")
        } else {
            props.setError("")
        }
    }, [localMinValue, localMaxValue, props.setError])
    useEffect(() => {
            isError()
        },
        [localMinValue, localMaxValue, isError])

    const disabledButtonSet = () => {
        if (props.error) {
            return true
        }
    }

    return (
        <div className={s.block}>
            max:<input type='number' onChange={changeMaxValue} value={localMaxValue}/><br/>
            min:<input className={s.i} onChange={changeMinValue} value={localMinValue} type='number'/><br/>
            <Button variant='contained' onClick={setButton} disabled={disabledButtonSet()}>SET</Button><br/>
            <span>{props.error ? props.error : null}</span>
        </div>
    )
}

export default InputNumber