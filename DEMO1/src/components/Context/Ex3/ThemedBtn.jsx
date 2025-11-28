import { useContext } from "react"
import { themeContext } from "./App1"

export default function ThemedBtn(){
    let {theme, toggleTheme} = useContext(themeContext)

    const btnStyle = {
        background: theme == 'light' ? '#222' : '#fff',
        color: theme == 'light' ? '#fff' : '#222',
        padding: '4px',
        border: '2px solid blue',
        cursor: 'pointer',
        transition: 'all 2s',
        borderRadius: '10px'
    }

    return(
        <>
        <button style={btnStyle} onClick={toggleTheme}>Switch to {theme == 'light' ? 'Dark' : 'Light'} Mode</button>
        </>
    )
}