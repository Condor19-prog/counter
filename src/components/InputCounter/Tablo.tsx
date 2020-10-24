import React from "react";
import s from './Tablo.module.css'


type counterPropsType = {
    count: number
}

function Tablo(props: counterPropsType) {
    return (
        <div className={s.tablo}>
           <span>{props.count}</span>
        </div>
    )
}

export default Tablo