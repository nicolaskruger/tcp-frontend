import { createContext, FC, ReactNode } from "react";
import { useCookies } from "../hooks/useCookies";

export type User = {
    name: string,
    setName: (name: string) => void
}


export const UserContext = createContext<User>({} as User)

export const UserProvider:FC<{children: ReactNode}> = ({children}) => {
    
    const [name, setName] = useCookies<string>("", "@user")

    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )
} 