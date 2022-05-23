import { NextPage } from "next";
import dynamic from "next/dynamic";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../components/user_context";

const DynamicComponentWithNoSSR = dynamic(() => import('../components/text_chat'), {
    ssr: false
})

const Chat:NextPage = () => {
    
    const { name, messages, addMsg } = useContext(UserContext);
    const [text, setText] = useState('')

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()
        addMsg(text)
        setText('')
    }

    return (
        <div>
            <DynamicComponentWithNoSSR/>
        </div>
    )
}

export default Chat;