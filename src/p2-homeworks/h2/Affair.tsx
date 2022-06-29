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

    return (
        <div>
            {/*// show some text*/}
            <span> {props.affair.name}</span>
            <span> {props.affair.priority} </span>
            <button onClick={deleteCallback}>X</button>
            {/* <table>*/}
            {/*    <tr>*/}
            {/*        <td>{props.affair.name}</td>*/}
            {/*        <td>{props.affair.priority}</td>*/}
            {/*        <td>*/}
            {/*            <button onClick={deleteCallback}>X</button>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*</table>*/}


        </div>
    )
}

export default Affair
