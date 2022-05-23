import  io,{ Socket }  from "socket.io-client"
import { useEffect, useState } from "react"

export const useTcpClient = (onReciveMessage: (msg: string) => void) => {
    
    const [socket, setSocket] = useState<Socket | null>()
    
    const sendMessage = (msg: string) => {
        socket?.send(msg)
    }

    useEffect(() => {
        const sock = io("127.0.0.1:1337")
        sock.on("data", onReciveMessage)
        setSocket(sock)
        return () => {
            socket?.close();
        }
    }, [])
    return socket
}