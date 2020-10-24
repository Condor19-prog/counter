import React from "react";
import {Button} from "@material-ui/core";

type universalButtonPropsType = {
    title: string
    inc: () => void
    reset: () => void
    count: number
}

function UniversalButton(props: universalButtonPropsType) {
    return (
        <div>
            <Button variant='contained' onClick={() => {props.inc()}} disabled={props.count === 5}>{props.title}</Button>
            <Button variant='contained' onClick={() => {props.reset()}} disabled={props.count === 0}>{props.title}</Button>
        </div>
    )
}

export default UniversalButton