import { FC, FormEvent, useContext, useState } from "react";
import { UserContext } from "./user_context";

const TextChat: FC = () => {

    const { name, messages, addMsg } = useContext(UserContext);
    const [text, setText] = useState('')

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()
        addMsg(text)
        setText('')
    }

    return (
        <>
            <h1>
                chat
            </h1>
            <h2>
                Usuario: {name}
            </h2>
            <ul>
                {
                    messages.map((msg) => (
                        <li>
                            <strong>user: {msg.name}</strong>
                            <br />
                            {msg.name}
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={onSubmit}>
                <input onChange={event => setText(event.target.value)} type="text" />
                <button type="submit" >enviar</button>
            </form>  
        </>
    )
}

export default TextChat