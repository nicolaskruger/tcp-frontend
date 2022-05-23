import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useCookies } from "../hooks/useCookies";
import { useTcpClient } from "../hooks/useTcpCleint";

export type User = {
    name: string,
    setName: (name: string) => void,
    addMsg: (msg: string) => void,
    messages: Message[],
}
export type Message = {
    name: string,
    msg: string
}

const socket = io('127.0.0.1:1337')

export const UserContext = createContext<User>({} as User)

export const UserProvider:FC<{children: ReactNode}> = ({children}) => {
    
    const [messages, setMessages] = useState<Message[]>([])

    const client = useTcpClient((msg) =>{});

    const addMsg = (msg: string) => {
       const messsge: Message = {
           name,
           msg
       }
       socket.send(JSON.stringify(messsge))
        setMessages([...messages, messsge])
    }

    const [name, setName] = useCookies<string>("", "@user")

    return (
        <UserContext.Provider value={{name, setName, addMsg, messages}}>
            {children}
        </UserContext.Provider>
    )
} 