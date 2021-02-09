import React from "react";
import {Button} from "@material-ui/core";
import s from './UniversalButton.module.css'

type universalButtonPropsType = {
    increment: () => void
    minValue: number
    maxValue: number
    counter: number
    disableButton: boolean
    reset: (minValue: number) => void
    set: () => void
    disableSet: boolean
}

function UniversalButton(props: universalButtonPropsType) {

    const resetButton = () => {
        props.reset(props.minValue)
    }


    return (
        <div className={s.group}>
            <div className={s.set}>
                <Button variant='contained' onClick={props.set} disabled={props.disableSet}>SET</Button>
            </div>
            <div className={s.twoButtons}>
                <Button variant='contained' onClick={props.increment} disabled={props.disableButton}
                        style={{marginRight: 10}}>Inc</Button>
                <Button variant='contained' onClick={resetButton}>Reset</Button>
            </div>
        </div>
    )
}

export default UniversalButton