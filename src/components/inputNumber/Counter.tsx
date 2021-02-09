import React, {ChangeEvent, useState} from "react";
import s from './Counter.module.css'
import UniversalButton from "../universalButton/UniversalButton";
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../../redux/store";
import {incrementAC, resetAC, setAC} from "../../redux/reducer";
import {TextField} from "@material-ui/core";

function Counter() {
    let counter = useSelector<rootStateType, number>(state => state.count.counterValue)
    const dispatch = useDispatch()

    const [maxValue, setMaxValue] = useState(1)
    const [minValue, setMinValue] = useState(0)
    const [disableIncrement, setDisableIncrement] = useState(false)
    const [disableSet, setDisableSet] = useState(false)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let max = Number(e.currentTarget.value)
        if (maxValue === counter) setDisableIncrement(true)
        max - 1 < minValue ? setDisableIncrement(true) : setDisableIncrement(false)
        setMaxValue(max)
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let min = Number(e.currentTarget.value)
        setMinValue(min)
        min >= maxValue ? setDisableSet(true) : setDisableSet(false)
        min >= maxValue ? setDisableIncrement(true) : setDisableIncrement(false)
    }

    const increment = () => {
        if (maxValue - 1 === counter) setDisableIncrement(true)
        if (counter <= maxValue) {
            dispatch(incrementAC())
            setDisableSet(false)
        }
    }
    const reset = () => {
        if (dispatch(resetAC())) {
            setDisableIncrement(false)
            setMaxValue(0)
            setMinValue(0)
            counter = 0
        }
    }
    const set = () => {
        dispatch(setAC(minValue))
        setDisableIncrement(false)
        setDisableSet(true)
    }
    const Count = () => {
        return counter === maxValue ?
            <span className={s.countError}>{counter}</span> :
            <span className={s.count}>{counter}</span>
    }

    return (
        <div>
            <div className={s.input}>
                <div className={s.inputMax}>
                    <TextField type={'number'}
                               label="Maximum value"
                               value={maxValue}
                               onChange={onChangeMaxValue}
                               disabled={disableIncrement}
                               variant="outlined"/><br/>
                </div>
                <div>
                    <TextField type={'number'}
                               label="Minimum value"
                               value={minValue}
                               onChange={onChangeMinValue}
                               disabled={disableIncrement}
                               variant="outlined"/><br/>
                </div>
            </div>
            <Count/>
            <UniversalButton increment={increment}
                             minValue={minValue}
                             maxValue={maxValue}
                             counter={counter}
                             disableButton={disableIncrement}
                             reset={reset}
                             set={set}
                             disableSet={disableSet}
            />
        </div>
    )
}

export default Counter