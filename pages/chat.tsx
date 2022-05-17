import { NextPage } from "next";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../components/user_context";

const Chat:NextPage = () => {
    
    const { name } = useContext(UserContext);
    const [ msgs, setMsgs ] = useState<string[]>([])
    const [text, setText] = useState('')

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setMsgs([
            ...msgs,
            text
        ])
        setText('')
    }

    return (
        <div>
            <h1>
                chat
            </h1>
            <h2>
                Usuario: {name}
            </h2>
            <ul>
                {
                    msgs.map(msg => (
                        <li>
                            {msg}
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={onSubmit}>
                <input onChange={event => setText(event.target.value)} type="text" />
                <button type="submit" >enviar</button>
            </form>
        </div>
    )
}

export default Chat;