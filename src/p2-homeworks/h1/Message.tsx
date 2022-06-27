import React from 'react'

import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={style.popup}>
            <img className={style.avatar} src={props.avatar} alt=""/>
            <div className={style.corner}></div>
            <div className={style.info}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.date}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
