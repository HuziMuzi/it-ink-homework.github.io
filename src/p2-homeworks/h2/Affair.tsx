import React from 'react'
import s from './Affair.module.css'
import affairs from "./Affairs";

type AffairType = {
    name: string
    priority: string
}

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: () => void // need to fix any
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }// need to fix
    const priorityClass = s.item + ' ' + s[props.affair.priority]
    return (
        <div>
            {/*// show some text*/}
            <div className={s.affair}>
                <div className={s.item}> {props.affair.name}</div>
                <div className={priorityClass}> [ {props.affair.priority} ]</div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
