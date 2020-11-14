import React from "react";
import {Button} from "@material-ui/core";

type universalButtonPropsType = {
    inc: () => void
    reset: () => void
    count: number
    maxValue: number
    startValue: number
}

function UniversalButton(props: universalButtonPropsType) {

    const disableButtonInc = () => {
        if(props.count === props.maxValue || props.maxValue === 0){
            return true;
        }
    }

    return (
        <div>
            <Button variant='contained' onClick={() => {props.inc()}} disabled={disableButtonInc()}>Inc</Button>
            <Button variant='contained' onClick={() => {props.reset()}} disabled={props.count === props.startValue }>Reset</Button>
        </div>
    )
}

export default UniversalButton