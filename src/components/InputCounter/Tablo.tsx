import React from "react";
import s from '../InputCounter/Tablo.module.css'


type counterPropsType = {
    count: number
    maxValue: number
}

function Tablo(props: counterPropsType) {
    return (
        <div className={props.count===props.maxValue ? s.error : s.tablo}>
           <span>{props.count}</span>
        </div>
    )
}

export default Tablo