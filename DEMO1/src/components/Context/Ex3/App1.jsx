import React,{ useState } from "react"
import Toolbar from "./Toolbar"

const themeContext = React.createContext()

export default function App1(){

const [theme, setTheme] = useState('light')

const toggleTheme = ()=>{
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
}

    return(
        <>
        <themeContext.Provider value={{theme, toggleTheme}}>
            <Toolbar />
        </themeContext.Provider>
        </>
    )
}
export {themeContext}


// App1 ---> Toolbar ----> ThemedBtn

