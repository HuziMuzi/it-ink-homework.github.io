import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (name: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => {
        return (
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
            />
        )
    })

    const setAll = () => {
        props.setFilter('all')

    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')

    }

    const onAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const onHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const onMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const onLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')
    const setActive = (filter: FilterType) => {
        return s.button + ' ' + (props.filter === filter ? s.active : '')
    }

    return (
        <div>
            {mappedAffairs}
            {/*<button onClick={setAll} className={onAll}>All</button>*/}
            {/*<button onClick={setHigh} className={onHigh}>High</button>*/}
            {/*<button onClick={setMiddle} className={onMiddle}>Middle</button>*/}
            {/*<button onClick={setLow} className={onLow}>Low</button>*/}

            <button onClick={setAll} className={setActive('all')}>All</button>
            <button onClick={setHigh} className={setActive('high')}>High</button>
            <button onClick={setMiddle} className={setActive('middle')}>Middle</button>
            <button onClick={setLow} className={setActive('low')}>Low</button>
        </div>
    )
}

export default Affairs
