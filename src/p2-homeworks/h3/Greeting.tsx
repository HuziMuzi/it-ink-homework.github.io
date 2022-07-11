import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const disableBtn = error ? true : false


    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onKeyPress}/>
            <button onClick={addUser} disabled={disableBtn}>add</button>
            <span>{totalUsers}</span>
            <div>
                <span className={s.errorMessage}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
